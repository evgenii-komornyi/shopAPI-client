import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AxiosResponse } from 'axios';
import { handleError } from '../helpers/api.helper';

import { getOrderByUserId, getOrders } from '../api/orders.api';
import { OrderDetailsDTO } from '../interfaces/entities/dto/order/OrderDetailsDTO';
import { ClientDetailsDTO } from '../interfaces/entities/dto/client/ClientDetailsDTO';
import { AddressDetailsDTO } from '../interfaces/entities/dto/address/AddressDetailsDTO';
import { OrderResponse } from '../interfaces/entities/responses/order/OrderResponse';
import { OrdersResponse } from '../interfaces/entities/responses/admin/order/OrdersResponse';
import { UserOrderDTO } from '../interfaces/entities/dto/order/UserOrderDTO';

interface IOrderState {
    orders: UserOrderDTO[];
    order: OrderDetailsDTO;
    status: string;
    validationErrors: string[];
    databaseErrors: string[];
    isLoaded: boolean;
    isOrderLoaded: boolean;

    getOrders: () => Promise<void>;
    getOrder: (orderId: number, hasFullInformation: boolean) => Promise<void>;
    resetSelectedOrder: () => void;
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
    phoneNumber: '',
    uClientId: '',
    address: initialAddress,
};

const initialOrder: OrderDetailsDTO = {
    id: 0,
    client: initialClient,
    orderStatus: '',
    orderDate: '',
    deliveryComment: '',
    deliveryType: '',
    uOrderId: '',
    orderItems: [],
};

const useOrderStore = create<IOrderState>()(
    devtools(set => ({
        orders: [],
        order: initialOrder,
        status: '',
        validationErrors: [],
        databaseErrors: [],
        isLoaded: false,
        isOrderLoaded: false,

        getOrders: async () => {
            try {
                const response: AxiosResponse<OrdersResponse> =
                    await getOrders();

                if (response) {
                    const { data } = response.data;

                    if (data.status === 'Success') {
                        set({ orders: data.orders });
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
                    set({ isLoaded: true, status: data.status });
                }
            } catch (error) {
                handleError(error as Error);
            }
        },

        getOrder: async (orderId: number, hasFullInformation: boolean) => {
            set({ isOrderLoaded: false });
            try {
                const response: AxiosResponse<OrderResponse> =
                    await getOrderByUserId(orderId, hasFullInformation);

                if (response) {
                    const { data } = response.data;

                    if (data.status === 'Success') {
                        set({ order: data.order });
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
                    set({ isOrderLoaded: true, status: data.status });
                }
            } catch (error) {
                handleError(error as Error);
            }
        },

        resetSelectedOrder: () => {
            set({ order: initialOrder, isOrderLoaded: false });
        },
    }))
);

export default useOrderStore;
