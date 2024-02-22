import { useEffect, useState } from 'react'

export const useFetch = (fetchAPI, param) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
            fetchAPI(param)
                .then((response) => {
                    setData(response.data);
                })
                .catch((err) => {
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
    }, [fetchAPI, param]);

    return { data, isLoading, error };
}
