import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { StatusDetailsDTO } from '../interfaces/entities/dto/admin/status/StatusDetailsDTO';
import { AdminOrderDetailsDTO } from '../interfaces/entities/dto/admin/order/AdminOrderDetailsDTO';
import { AxiosError, AxiosResponse } from 'axios';
import { OrderStatusUpdateResponse } from '../interfaces/entities/responses/admin/order/OrderStatusUpdateResponse';
import {
    getAdminOrderById,
    getAdminOrders,
    getAdminOrdersStatuses,
    updateOrderStatus,
} from '../api/admin.api';
import { getCookie } from '../helpers/cookie.helper';
import { OrdersResponse } from '../interfaces/entities/responses/admin/order/OrdersResponse';
import { StatusesResponse } from '../interfaces/entities/responses/admin/status/StatusesResponse';

interface IAdminState {
    statuses: StatusDetailsDTO[];
    orders: AdminOrderDetailsDTO[];
    order?: AdminOrderDetailsDTO;
    validationErrors: string[];
    databaseErrors: string[];
    errorCode: number;
    isOrdersLoaded: boolean;
    isOrderLoaded: boolean;

    getStatusesAndOrders: () => void;
    updateOrderStatus: (orderId: number, statusId: number) => void;
    getOrderById: (orderId: number) => void;
    reset: () => void;
}

const useAdminStore = create<IAdminState>()(
    devtools((set, get) => ({
        statuses: [],
        orders: [],
        order: undefined,
        validationErrors: [],
        databaseErrors: [],
        errorCode: 0,
        isOrdersLoaded: false,
        isOrderLoaded: false,

        getStatusesAndOrders: async (): Promise<void> => {
            try {
                const statusesResponse: AxiosResponse<StatusesResponse> =
                    await getAdminOrdersStatuses(getCookie('token'));

                if (statusesResponse) {
                    const {
                        data: { data },
                    } = statusesResponse;

                    if (data.databaseErrors) {
                        set({ databaseErrors: data.databaseErrors });
                    } else {
                        set({ statuses: data.statuses });
                    }
                }

                const ordersResponse: AxiosResponse<OrdersResponse> =
                    await getAdminOrders(getCookie('token'));

                if (ordersResponse) {
                    const {
                        data: { data },
                    } = ordersResponse;

                    if (data.databaseErrors) {
                        set({ databaseErrors: data.databaseErrors });
                    } else {
                        set({ orders: data.orders });
                    }
                }

                set({ isOrdersLoaded: true });
            } catch (error: unknown) {
                const axiosError: AxiosError = error as AxiosError;

                console.error(axiosError.response?.status);

                set({
                    errorCode: axiosError.response?.status,
                    isOrdersLoaded: false,
                });
            }
        },

        updateOrderStatus: async (
            orderId: number,
            statusId: number
        ): Promise<void> => {
            try {
                const updateResponse: AxiosResponse<OrderStatusUpdateResponse> =
                    await updateOrderStatus({
                        orderId,
                        statusId,
                        token: getCookie('token'),
                    });

                if (updateResponse) {
                    const {
                        data: { data },
                    } = updateResponse;

                    if (data.status === 'Success') {
                        const currentOrders: AdminOrderDetailsDTO[] =
                            get().orders;

                        // const updatedOrder: AdminOrderDetailsDTO | undefined =
                        //     currentOrders.find(order => order.id === orderId);

                        // if (updatedOrder) {
                        //     updatedOrder.orderStatus = data.order.orderStatus;
                        //     updatedOrder.orderStatusId =
                        //         data.order.orderStatusId;
                        // }

                        set({ orders: [...currentOrders] });
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
                console.error(error);
            }
        },

        getOrderById: async (orderId: number): Promise<void> => {
            try {
                const response = await getAdminOrderById({
                    orderId,
                    token: getCookie('token'),
                });

                if (response) {
                    set({ order: response.data.data.order });
                }
                set({ isOrderLoaded: true });
            } catch (error) {
                console.log(error);
                set({ isOrderLoaded: false });
            }
        },

        reset: (): void => {
            set({
                isOrderLoaded: false,
                isOrdersLoaded: false,
                order: undefined,
            });
        },
    }))
);

export default useAdminStore;
