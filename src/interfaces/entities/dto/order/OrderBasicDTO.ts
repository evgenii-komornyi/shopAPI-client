import { IOrderItem } from '../../IOrderItem.interface';

export interface OrderBasicDTO {
    id: number;
    orderStatus: string;
    orderDate: string;
    deliveryComment: string;
    deliveryType: string;
    uOrderId: string;
    orderItems: IOrderItem[];
}
