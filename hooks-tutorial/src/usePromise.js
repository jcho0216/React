import { useState, useEffect } from 'react';

export default function usePromise(promiseCreater, deps) {
    const [ resolved, setResolved] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const process = async () => {
        setLoading(true);
        try {
            const result = await promiseCreater();
            setResolved(result);
        }catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(()=> {
        process();
    }, deps);

    return [loading, resolved, error];
}