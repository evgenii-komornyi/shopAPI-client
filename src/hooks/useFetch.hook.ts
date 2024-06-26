import { useEffect, useMemo, useState } from 'react';
// import { NavigateFunction, useNavigate } from 'react-router-dom';

import { getById } from '../api/genericGet.api';

import { IFetchResponse } from '../interfaces/fetch/IFetchResponse.interface';
import { AxiosResponse } from 'axios';
import { handleError } from '../helpers/api.helper';

export const useFetch = <T>(url: string): IFetchResponse<T> => {
    const [data, setData] = useState<T | undefined>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    // const [error, setError] = useState<string>('');
    const [exception, setException] = useState<string>('');

    // const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        const fetchById = async (): Promise<void> => {
            try {
                const response: AxiosResponse<T> = await getById<T>(url);

                if (response) {
                    setData(response.data);

                    setIsLoaded(true);
                }
            } catch (err) {
                console.error(err);
                if (err instanceof Error) {
                    handleError(err);
                    setException(err.message);
                }
            }
        };
        void fetchById();
    }, [url]);

    const memoizedData: T | undefined = useMemo(
        (): T | undefined => data,
        [data]
    );

    return { data: memoizedData, isLoaded, exception };
};
