import axios, { AxiosResponse } from 'axios';
import { IUserCreateRequest } from '../interfaces/entities/requests/user/IUserCreateRequest';
import { IUserLoginRequest } from '../interfaces/entities/requests/user/IUserLoginRequest';
import { IUserRegisterResponse } from '../interfaces/entities/responses/user/IUserRegisterResponse';
import { IUserLoginResponse } from '../interfaces/entities/responses/user/IUserLoginResponse';
import { IUserVerifyResponse } from '../interfaces/entities/responses/user/IUserVerifyResponse';
import { newAbortSignal } from '../helpers/api.helper';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_AUTH_API_URL } = import.meta.env;

export const registerUser = (
    userToRegister: IUserCreateRequest
): Promise<AxiosResponse<IUserRegisterResponse>> =>
    axios.post(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_AUTH_API_URL}/register`,
        {
            ...userToRegister,
        },
        { signal: newAbortSignal(5000) }
    );

export const loginUser = (
    userToLogin: IUserLoginRequest
): Promise<AxiosResponse<IUserLoginResponse>> =>
    axios.post(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_AUTH_API_URL}/login`,
        { ...userToLogin },
        { signal: newAbortSignal(5000) }
    );

export const verifyUser = (
    emailToken: string
): Promise<AxiosResponse<IUserVerifyResponse>> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_AUTH_API_URL}/verify_email?emailToken=${emailToken}`,
        { signal: newAbortSignal(5000) }
    );

export const logoutUser = (): Promise<void> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_AUTH_API_URL}/logout`,
        { signal: newAbortSignal(5000) }
    );
