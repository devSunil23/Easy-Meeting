import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useQueryState(defaultValues) {
    const [params, setParams] = useSearchParams(defaultValues);

    const myParams = {};

    Object.keys(defaultValues).forEach((name) => {
        Object.defineProperty(myParams, name, {
            get() {
                return params.get(name);
            },
        });
    });

    const set = useCallback(
        (name, value) => {
            setParams(
                (prev) => {
                    console.log({ value });
                    prev.set(name, value);
                    return prev;
                },
                { replace: true }
            );
        },
        [setParams]
    );

    return [myParams, set];
}
