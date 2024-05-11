import axios, { AxiosResponse } from 'axios';
import { newAbortSignal } from '../helpers/api.helper';

export const getById = <T>(url: string): Promise<AxiosResponse<T>> =>
    axios.get(url, { signal: newAbortSignal(5000) });
