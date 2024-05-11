import { IOrderItem } from './IOrderItem.interface';

export interface IGetOrderResponse {
    orderId: string;
    items: IOrderItem[];
    totalPrice: number;
}
