import React, { useEffect } from 'react';
import { useContext } from 'react';
import { Handler } from '../useForm/';
import DefaultInput from './../components/DefaultInput';
import { isDefined, validateType } from '../utilities/functions';

function Input(props) {
    const {
        sx,
        name,
        maxLength,
        minLength,
        placeholder,
        onChange,
        type,
        ...rest
    } = props;

    const {
        values,
        errors,
        setValues,
        onChangeHandler: defaultChangeHandler,
        loading,
        addValidator,
        config = {},
    } = useContext(Handler);

    const Input = config.Input || DefaultInput;

    const customChangeHandler = (...params) => {
        const newValue = onChange(...params);

        setValues({ [name]: newValue });
    };

    let changeHandler = onChange ? customChangeHandler : defaultChangeHandler;

    // Adding minLength Validator using the Handler Context
    useEffect(() => {
        if (isDefined(minLength)) {
            validateType(minLength, 'number', 'minLength should be an integer');

            addValidator(value =>
                value.length >= minLength
                    ? ''
                    : `Must contain at least ${minLength} characters`
            );
        }
    }, [addValidator, minLength]);

    // Adding maxLength Validator using the Handler Context
    useEffect(() => {
        if (isDefined(maxLength)) {
            validateType(maxLength, 'number', 'maxLength should be an integer');

            addValidator(value =>
                value.length <= maxLength
                    ? ''
                    : `Maximum ${maxLength} characters are allowed`
            );
        }
    }, [addValidator, maxLength]);

    return React.createElement(Input, {
        value: values[name],
        name: name,
        type: type,
        onChange: changeHandler,
        disabled: loading,
        placeholder: placeholder,
        ...(errors[name] ? { error: true, helperText: errors[name] } : {}),
        ...rest,
    });
}

export default Input;
