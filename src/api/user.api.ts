import axios, { AxiosResponse } from 'axios';
import { IUserByIdResponse } from '../interfaces/entities/responses/user/IUserByIdResponse';
import { newAbortSignal } from '../helpers/api.helper';
import { IClientUpdateRequest } from '../interfaces/entities/requests/client/IClientUpdateRequest';
import { IClientUpdateResponse } from '../interfaces/entities/responses/client/IClientUpdateResponse';
import { IAddressUpdateRequest } from '../interfaces/entities/requests/address/IAddressUpdateRequest';
import { IAddressUpdateResponse } from '../interfaces/entities/responses/address/IAddressUpdateResponse';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_USERS_API_URL } = import.meta.env;

export const getUserByIdWithToken = (
    token: string
): Promise<AxiosResponse<IUserByIdResponse>> =>
    axios.get(`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_USERS_API_URL}`, {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        signal: newAbortSignal(5000),
    });

export const updateClient = (
    clientToUpdate: IClientUpdateRequest
): Promise<AxiosResponse<IClientUpdateResponse>> =>
    axios.patch(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_USERS_API_URL}/client/${clientToUpdate.clientId}`,
        { ...clientToUpdate },
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${clientToUpdate.token}`,
            },
            signal: newAbortSignal(5000),
        }
    );

export const updateAddress = (
    addressToUpdate: IAddressUpdateRequest
): Promise<AxiosResponse<IAddressUpdateResponse>> =>
    axios.patch(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_USERS_API_URL}/address/${addressToUpdate.addressId}`,
        { ...addressToUpdate },
        {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${addressToUpdate.token}`,
            },
            signal: newAbortSignal(5000),
        }
    );
