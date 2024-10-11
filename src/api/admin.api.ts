import axios, { AxiosResponse } from 'axios';
import { newAbortSignal } from '../helpers/api.helper';
import { StatusesResponse } from '../interfaces/entities/responses/admin/status/StatusesResponse';
import { OrdersResponse } from '../interfaces/entities/responses/admin/order/OrdersResponse';
import { OrderStatusUpdateRequest } from '../interfaces/entities/requests/admin/order/OrderStatusUpdateRequest';
import { OrderStatusUpdateResponse } from '../interfaces/entities/responses/admin/order/OrderStatusUpdateResponse';
import { OrderByIdResponse } from '../interfaces/entities/responses/admin/order/OrderByIdResponse';

const {
    VITE_HOST_URL,
    VITE_HOST_PORT,
    VITE_ADMIN_API_URL,
    VITE_ADMIN_ORDERS_API_URL,
    VITE_ADMIN_ORDERS_STATUSES_API_URL,
} = import.meta.env;

export const getAdminOrdersStatuses = (
    token: string
): Promise<AxiosResponse<StatusesResponse>> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ADMIN_API_URL}/${VITE_ADMIN_ORDERS_STATUSES_API_URL}`,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            signal: newAbortSignal(5000),
        }
    );

export const getAdminOrders = (
    token: string
): Promise<AxiosResponse<OrdersResponse>> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ADMIN_API_URL}/${VITE_ADMIN_ORDERS_API_URL}`,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            signal: newAbortSignal(5000),
        }
    );

export const getAdminOrderById = (orderRequest: {
    orderId: number;
    token: string;
}): Promise<AxiosResponse<OrderByIdResponse>> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ADMIN_API_URL}/${VITE_ADMIN_ORDERS_API_URL}/${orderRequest.orderId}`,
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${orderRequest.token}`,
            },
            signal: newAbortSignal(5000),
        }
    );

export const updateOrderStatus = (
    orderRequest: OrderStatusUpdateRequest
): Promise<AxiosResponse<OrderStatusUpdateResponse>> =>
    axios.patch(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ADMIN_API_URL}/${VITE_ADMIN_ORDERS_API_URL}/${orderRequest.orderId}`,
        { statusId: orderRequest.statusId },
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${orderRequest.token}`,
            },
            signal: newAbortSignal(5000),
        }
    );
