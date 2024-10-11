import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { AxiosResponse } from 'axios';
import { handleError } from '../helpers/api.helper';

import { getOrderByUserId } from '../api/orders.api';
import { OrderDetailsDTO } from '../interfaces/entities/dto/order/OrderDetailsDTO';
import { ClientDetailsDTO } from '../interfaces/entities/dto/client/ClientDetailsDTO';
import { AddressDetailsDTO } from '../interfaces/entities/dto/address/AddressDetailsDTO';
import { OrderResponse } from '../interfaces/entities/responses/order/OrderResponse';

interface IOrderState {
    order: OrderDetailsDTO;
    status: string;
    validationErrors: string[];
    databaseErrors: string[];
    isLoaded: boolean;

    getOrder: (orderId: number) => Promise<void>;
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
        order: initialOrder,
        status: '',
        validationErrors: [],
        databaseErrors: [],
        isLoaded: false,

        getOrder: async (orderId: number) => {
            try {
                const response: AxiosResponse<OrderResponse> =
                    await getOrderByUserId(orderId);

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
                    set({ isLoaded: true, status: data.status });
                }
            } catch (error) {
                handleError(error as Error);
            }
        },
    }))
);

export default useOrderStore;
