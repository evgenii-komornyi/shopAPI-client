import axios, { AxiosResponse } from 'axios';
import { newAbortSignal } from '../helpers/api.helper';
import { ICreateOrderResponse } from '../interfaces/entities/ICreateOrderResponse.interface';
import { IOrderInfo } from '../interfaces/entities/IOrderInfo.interface';
import { IOrderRequest } from '../interfaces/entities/requests/order/IOrderRequest';
import { OrderResponse } from '../interfaces/entities/responses/order/OrderResponse';
import { getCookie } from '../helpers/cookie.helper';

const {
    VITE_HOST_URL,
    VITE_HOST_PORT,
    VITE_ORDERS_API_URL,
    VITE_SECURE_ORDERS_API_URL,
} = import.meta.env;

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

export const createSecuredOrder = (
    orderCreateRequest: IOrderRequest
): Promise<AxiosResponse<OrderResponse>> =>
    axios.post(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_SECURE_ORDERS_API_URL}`,
        {
            ...orderCreateRequest,
        },
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${orderCreateRequest.token}`,
            },
            signal: newAbortSignal(5000),
        }
    );

export const getOrderByUserId = (
    orderId: number
): Promise<AxiosResponse<OrderResponse>> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_SECURE_ORDERS_API_URL}/${orderId}`,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${getCookie('token')}`,
            },
            signal: newAbortSignal(5000),
        }
    );
