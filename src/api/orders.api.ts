import axios, { AxiosResponse } from 'axios';
import { newAbortSignal } from '../helpers/api.helper';
import { ICreateOrderResponse } from '../interfaces/order/ICreateOrderResponse.interface';
import { IOrderInfo } from '../interfaces/order/IOrderInfo.interface';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_ORDERS_API_URL } = import.meta.env;

export const createOrder = (
    orderCreateRequest: IOrderInfo
): Promise<AxiosResponse<ICreateOrderResponse>> =>
    axios.post<ICreateOrderResponse>(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ORDERS_API_URL}`,
        {
            ...orderCreateRequest,
        },
        { signal: newAbortSignal(5000) }
    );
