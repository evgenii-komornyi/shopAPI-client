import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AdminOrderDetailsDTO } from '../interfaces/entities/dto/admin/order/AdminOrderDetailsDTO';
import { AxiosError, AxiosResponse } from 'axios';
import { getCookie } from '../helpers/cookie.helper';
import { OrderByIdDetailsDTO } from '../interfaces/entities/dto/admin/order/OrderByIdDetailsDTO';
import { OrderByIdResponse } from '../interfaces/entities/responses/admin/order/OrderByIdResponse';
import { OrderStatusUpdateResponse } from '../interfaces/entities/responses/admin/order/OrderStatusUpdateResponse';
import { StatusDetailsDTO } from '../interfaces/entities/dto/admin/status/StatusDetailsDTO';
import {
    getAdminOrderById,
    getAdminOrders,
    getAdminOrdersStatuses,
    updateOrderStatus,
} from '../api/admin.api';

interface IAdminState {
    statuses: StatusDetailsDTO[];
    orders: AdminOrderDetailsDTO[];
    order?: OrderByIdDetailsDTO;
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
            const token: string = getCookie('token');

            try {
                const [statusesResponse, ordersResponse] = await Promise.all([
                    getAdminOrdersStatuses(token),
                    getAdminOrders(token),
                ]);

                const {
                    data: { data: statusesData },
                } = statusesResponse;
                if (statusesData.databaseErrors) {
                    set({ databaseErrors: statusesData.databaseErrors });
                }

                const {
                    data: { data: ordersData },
                } = ordersResponse;
                if (ordersData.databaseErrors) {
                    set({ databaseErrors: ordersData.databaseErrors });
                }

                set({
                    statuses: statusesData.statuses,
                    orders: ordersData.orders,
                    isOrdersLoaded: true,
                });
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
                const response: AxiosResponse<OrderByIdResponse> =
                    await getAdminOrderById({
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
