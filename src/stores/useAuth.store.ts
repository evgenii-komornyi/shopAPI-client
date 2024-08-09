import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IUserLoginRequest } from '../interfaces/entities/requests/user/IUserLoginRequest';
import {
    loginUser,
    logoutUser,
    registerUser,
    verifyUser,
} from '../api/auth.api';
import { AxiosResponse } from 'axios';
import { IUserLoginResponse } from '../interfaces/entities/responses/user/IUserLoginResponse';
import { IUserVerifyResponse } from '../interfaces/entities/responses/user/IUserVerifyResponse';
import { IUserRegisterResponse } from '../interfaces/entities/responses/user/IUserRegisterResponse';
import { handleError } from '../helpers/api.helper';
import { IUserCreateRequest } from '../interfaces/entities/requests/user/IUserCreateRequest';
import { AuthDetailsDTO } from '../interfaces/entities/dto/user/AuthDetailsDTO';
import { removeCookie, setCookie } from '../helpers/cookie.helper';

interface IAuthState {
    user: AuthDetailsDTO;
    status: string;
    message?: string;
    validationErrors: string[];
    databaseErrors: string[];
    isLoaded: boolean;

    registerUser: (userRequest: IUserCreateRequest) => void;
    clearMessage: () => void;
    login: (userToLogin: IUserLoginRequest) => void;
    verifyEmail: (emailToken: string) => void;
    logout: () => void;
}

const initialAuthState: AuthDetailsDTO = {
    id: 0,
    uUserId: '',
    client: {
        id: 0,
        uClientId: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
    },
    token: '',
    exp: 0,
};

const useAuthStore = create<IAuthState>()(
    devtools(
        persist(
            set => ({
                user: initialAuthState,
                status: '',
                message: '',
                validationErrors: [],
                databaseErrors: [],
                isLoaded: false,

                registerUser: async (userRequest: IUserCreateRequest) => {
                    try {
                        const response: AxiosResponse<IUserRegisterResponse> =
                            await registerUser(userRequest);

                        if (response) {
                            const { data } = response.data;

                            if (data.status === 'Success') {
                                set({ message: data.message });
                            } else {
                                if (data.validationErrors) {
                                    set({
                                        validationErrors: data.validationErrors,
                                    });
                                }

                                if (data.databaseErrors) {
                                    set({
                                        databaseErrors: data.databaseErrors,
                                    });
                                }
                            }
                        }
                    } catch (error) {
                        handleError(error as Error);
                    }
                },

                clearMessage: () => {
                    set({ message: '' });
                },

                login: async (userToLogin: IUserLoginRequest) => {
                    try {
                        const response: AxiosResponse<IUserLoginResponse> =
                            await loginUser(userToLogin);

                        if (response) {
                            const { data } = response.data;

                            if (data.status === 'Success') {
                                set({ user: data.user });

                                setCookie(
                                    'token',
                                    data.user.token,
                                    data.user.exp
                                );
                            } else {
                                if (data.validationErrors) {
                                    set({
                                        validationErrors: data.validationErrors,
                                    });
                                }

                                if (data.databaseErrors) {
                                    set({
                                        databaseErrors: data.databaseErrors,
                                    });
                                }
                            }
                            set({ status: data.status });
                        }
                    } catch (error) {
                        console.error('user store on login:', error);
                    }
                },

                verifyEmail: async (emailToken: string) => {
                    try {
                        const response: AxiosResponse<IUserVerifyResponse> =
                            await verifyUser(emailToken);

                        if (response) {
                            const { data } = response.data;

                            if (data.status === 'Failed') {
                                set({ validationErrors: data.errors });
                            }

                            set({ status: data.status });
                        }
                    } catch (error) {
                        console.error('user store on verify email:', error);
                    }
                },

                logout: async () => {
                    try {
                        await logoutUser();
                        removeCookie('token');
                        set({ user: initialAuthState });
                    } catch (error) {
                        handleError(error as Error);
                    }
                },
            }),
            { name: 'auth', partialize: state => ({ user: state.user }) }
        )
    )
);

export default useAuthStore;
