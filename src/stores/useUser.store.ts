import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { AxiosResponse } from 'axios';
import { handleError } from '../helpers/api.helper';
import { getCookie } from '../helpers/cookie.helper';
import { UserDetailsDTO } from '../interfaces/entities/dto/user/UserDetailsDTO';
import { IUserByIdResponse } from '../interfaces/entities/responses/user/IUserByIdResponse';
import {
    getUserByIdWithToken,
    updateAddress,
    updateClient,
} from '../api/user.api';
import { ClientDetailsDTO } from '../interfaces/entities/dto/client/ClientDetailsDTO';
import { AddressDetailsDTO } from '../interfaces/entities/dto/address/AddressDetailsDTO';
import { IClientUpdateRequest } from '../interfaces/entities/requests/client/IClientUpdateRequest';
import { IClientUpdateResponse } from '../interfaces/entities/responses/client/IClientUpdateResponse';
import { IAddressUpdateRequest } from '../interfaces/entities/requests/address/IAddressUpdateRequest';
import { IAddressUpdateResponse } from '../interfaces/entities/responses/address/IAddressUpdateResponse';

interface IUserState {
    user: UserDetailsDTO;
    status: string;
    validationErrors: string[];
    databaseErrors: string[];
    isLoaded: boolean;

    setUserIdOnAuth: (userId: number) => void;
    getUserById: () => void;
    updateClient: (request: IClientUpdateRequest) => Promise<void>;
    updateAddress: (request: IAddressUpdateRequest) => Promise<void>;
    logout: () => void;
}

const initialAddress: AddressDetailsDTO = {
    id: 0,
    country: '',
    city: '',
    postalCode: '',
    address: '',
    clientId: 0,
};

const initialClient: ClientDetailsDTO = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    uClientId: '',
    userId: 0,
    address: initialAddress,
};

const initialUserState: UserDetailsDTO = {
    id: 0,
    uUserId: '',
    email: '',
    createdAt: '',
    updatedAt: '',
    lastLoginAt: '',
    isActive: false,
    isVerified: false,
    roles: [],
    client: initialClient,
};

const useUserStore = create<IUserState>()(
    devtools(
        persist(
            set => ({
                user: initialUserState,
                status: '',
                validationErrors: [],
                databaseErrors: [],
                isLoaded: false,

                setUserIdOnAuth: (userId: number) => {
                    set(state => ({ user: { ...state.user, id: userId } }));
                },

                getUserById: async () => {
                    try {
                        const response: AxiosResponse<IUserByIdResponse> =
                            await getUserByIdWithToken(getCookie('token'));

                        if (response) {
                            const { data } = response.data;

                            if (data.status === 'Success') {
                                set({ user: data.user });
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
                            set({ isLoaded: true });
                        }
                    } catch (error) {
                        handleError(error as Error);
                    }
                },

                updateClient: async (
                    request: IClientUpdateRequest
                ): Promise<void> => {
                    try {
                        const response: AxiosResponse<IClientUpdateResponse> =
                            await updateClient(request);

                        if (response && response.status === 200) {
                            const { data } = response.data;

                            if (data.status === 'Success') {
                                const {
                                    firstName,
                                    lastName,
                                    email,
                                    phoneNumber,
                                } = data.client;

                                set(state => ({
                                    user: {
                                        ...state.user,
                                        client: {
                                            ...state.user.client,
                                            firstName,
                                            lastName,
                                            phoneNumber,
                                            email,
                                        },
                                    },
                                }));
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
                        handleError(error as Error);
                    }
                },

                updateAddress: async (
                    request: IAddressUpdateRequest
                ): Promise<void> => {
                    try {
                        const response: AxiosResponse<IAddressUpdateResponse> =
                            await updateAddress(request);

                        if (response && response.status === 200) {
                            const { data } = response.data;

                            if (data.status === 'Success') {
                                const { address } = data.address;

                                set(state => ({
                                    user: {
                                        ...state.user,
                                        client: {
                                            ...state.user.client,
                                            address: {
                                                ...state.user.client.address,
                                                address,
                                            },
                                        },
                                    },
                                }));
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
                        handleError(error as Error);
                    }
                },

                logout: () => {
                    set({ user: initialUserState, isLoaded: false });
                },
            }),
            { name: 'user', partialize: state => ({ user: state.user }) }
        )
    )
);

export default useUserStore;
