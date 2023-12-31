import React, {
    createContext,
    memo,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useReducer,
    useState,
} from 'react';
import { encodeData } from '../utilities';
import axios from 'axios';
import { isUndefined, isDefined, validateType } from '../utilities/functions';
import CircularProgress from '../components/CircularProgress';

const Handler = createContext(null);

const validatorsDispatch = function (validators, newValidator) {
    const updatedValidators = [
        ...(validators[newValidator.name] || []),
        ...newValidator.validator,
    ];
    return { ...validators, [newValidator.name]: updatedValidators };
};

const initializeValidators = fields => {
    const validators = {};
    for (const name in fields) {
        const fieldConfig = fields[name];
        validators[name] = [];
        const rules = fieldConfig.validator;
        if (rules) {
            if (Array.isArray(rules)) {
                validators[name].push(...rules);
            } else {
                validators[name].push(rules);
            }
        }

        // console.log(validators[name]);
        validateType(
            validators[name],
            'function',
            `Validator in '${name}' field should be a function: (value) => { // body }`
        );

        // initialize all utility validators to input.validator
        const maxLength = fieldConfig.maxLength;
        if (isDefined(maxLength)) {
            validateType(maxLength, 'number', 'maxLength should be an integer');

            validators[name].unshift(value =>
                value.length <= maxLength
                    ? ''
                    : `Maximum ${maxLength} characters are allowed`
            );
        }

        const minLength = fieldConfig.minLength;
        if (isDefined(minLength)) {
            validateType(minLength, 'number', 'minLength should be an integer');

            validators[name].unshift(value =>
                value.length >= minLength
                    ? ''
                    : `Must contain at least ${minLength} characters`
            );
        }

        const required = fieldConfig.required;
        if (isDefined(required) && required) {
            validators[name].unshift(value =>
                value ? '' : 'This field is required'
            );
        }
    }
    return validators;
};

const initializeValues = fields => {
    const inputs = {};
    for (const name in fields) {
        const value = fields[name].value;
        inputs[name] = isUndefined(value) ? '' : value;
    }
    return inputs;
};

const initializeFinals = fields => {
    const finals = {};
    for (const name in fields) {
        const fieldConfig = fields[name];

        if (isUndefined(fieldConfig.final)) continue;

        validateType(
            fieldConfig.final,
            'function',
            `final in '${name}' field should be a function: (value) => { // body }`
        );

        if (fieldConfig.final) {
            finals[name] = fieldConfig.final;
        }
    }

    return finals;
};

const initializeConfig = function (configUseForm) {
    configUseForm.Input = memo(configUseForm.Input);
    return configUseForm;
};

function useForm(fields, configUseForm) {
    // initialize all inputs to input.value
    const [initialValues] = useState(initializeValues(fields));

    console.log({ initialValues });

    // initialize all validators to input.validator (can be array or just a cb)
    const [validators, addValidator] = useReducer(
        validatorsDispatch,
        fields,
        initializeValidators
    );

    // initialize all finals to input.final
    const [finals] = useState(initializeFinals(fields));

    const [values, setValues] = useState(initialValues);

    console.log({ values });
    const [errors, setErrors] = useState({});
    const [config] = useState(initializeConfig(configUseForm));

    // validate a single field
    const validateField = useCallback(
        (name, value) => {
            const rules = validators[name];

            // if the validator doesn't contain any rules
            if (rules.length === 0) return true;

            return rules.every(rule => {
                if (typeof rule === 'function') {
                    const helperText = rule(value);

                    if (validators[name] !== helperText)
                        setErrors(validators => ({
                            ...validators,
                            [name]: helperText,
                        }));

                    return !helperText;
                } else {
                    throw new Error('Invalid rule: Must be a function');
                }
            });
        },
        [validators]
    );

    // onchange handler to fields
    const onChangeHandler = useCallback(
        e => {
            const { name, value } = e.target;
            // validate the field to show error message
            validateField(name, value);
            setValues(values => ({
                ...values,
                [name]: value,
            }));
        },
        [validateField]
    );

    // set all values and errors to empty
    const reset = useCallback(() => {
        setValues(initialValues);
        setErrors({});
    }, [initialValues]);

    // to set values manually can also have a cb that will get values as parameter (Memorized forever)
    const setManually = useCallback(
        updatedValues => {
            validateType(
                updatedValues,
                ['function', 'object'],
                'setting values manually required either an object or a callback function'
            );

            setValues(currentValues => {
                updatedValues =
                    typeof updatedValues === 'function'
                        ? updatedValues(currentValues)
                        : updatedValues;

                validateType(
                    updatedValues,
                    'object',
                    'callback function in setValues should return a object'
                );

                for (const name in updatedValues) {
                    const value = updatedValues[name];

                    if (isUndefined(currentValues[name]))
                        throw new Error(
                            'Field `' +
                                name +
                                '` does not exist in the useForm fields'
                        );

                    validateField(name, value);
                }

                return { ...currentValues, ...updatedValues };
            });
        },
        [setValues, validateField]
    );

    // Checks if all the fields are validated before submitting
    const submitValidator = useCallback(
        () =>
            Object.keys(values).every(fieldName =>
                validateField(fieldName, values[fieldName])
            ),
        [values, validateField]
    );

    return useMemo(
        () => ({
            values,
            onChangeHandler,
            errors,
            submitValidator,
            reset,
            setValues: setManually,
            finals,
            addValidator,
            config,
        }),
        [
            values,
            onChangeHandler,
            errors,
            submitValidator,
            reset,
            setManually,
            finals,
            addValidator,
            config,
        ]
    );
}

function Form({
    children,
    onSubmit,
    onError,
    handlers,
    method,
    action,
    enctype,
    final,
    retainOnSubmit,
    ...rest
}) {
    const [loading, setLoading] = useState(false);
    const submitMiddleware = async e => {
        e.preventDefault();

        // Validating before submitting
        if (!handlers.submitValidator()) return;

        setLoading(true);

        // Tuning values with the functions passed in final field individually
        const tunedValues = tuneValues(handlers);

        // Finalyzing values with the functions passed in final prop
        const finalValues = finalize(tunedValues, final);

        // Applying encoding on the data before submitting
        const values = encodeData(finalValues, enctype);

        try {
            let response;

            if (action !== '#') {
                // Getting axios method to use based on the method prop
                const requestMethod = getAxiosMethod(method);

                response = await axios({
                    url: action,
                    method: requestMethod,
                    data: values,
                });

                if (!retainOnSubmit) handlers.reset();
            }

            await onSubmit(response, values);
        } catch (e) {
            setLoading(false);
            if (e.name === 'AxiosError') return onError(e);
            throw e;
        }

        setLoading(false);
    };

    useEffect(() => {
        onSubmit &&
            validateType(
                onSubmit,
                'function',
                'onSubmit prop in <Form> should be a function'
            );
        onError &&
            validateType(
                onError,
                'function',
                'onError prop in <Form> should be a function'
            );
    }, [onError, onSubmit]);

    const contextValue = useMemo(
        () => ({ ...handlers, loading }),
        [handlers, loading]
    );

    return (
        <Handler.Provider value={contextValue}>
            <form onSubmit={submitMiddleware} noValidate {...rest}>
                {children}
            </form>
        </Handler.Provider>
    );
}

function Submit(props) {
    const handlers = useContext(Handler);

    useEffect(() => {
        if (handlers) return;
        throw new Error(
            'You are using Submit without a Form Component (you may be importing Form Component from wrong path)'
        );
    }, [handlers]);

    const { loading } = handlers;
    const { loader, loaderProps } = props;
    const defaultLoader = <CircularProgress {...loaderProps} />;
    return props.children(loading ? loader || defaultLoader : null);
}

// ------------- Utilities ------------------- //
function getAxiosMethod(method = 'get') {
    validateType(
        axios[method.toLowerCase()],
        'function',
        `method '${method}' is not supported in <Form> Component`
    );
    return method.toLowerCase();
}

function tuneValues(handlers) {
    const values = { ...handlers.values };
    for (const field in handlers.finals) {
        values[field] = handlers.finals[field](handlers.values[field]);
    }
    return values;
}

function finalize(tunedValues, finalizer) {
    if (isUndefined(finalizer)) return tunedValues;

    validateType(
        finalizer,
        'function',
        'final prop in <Form> component should be a function'
    );
    return finalizer(tunedValues);
}

export { Form, Submit, Handler, useForm };
