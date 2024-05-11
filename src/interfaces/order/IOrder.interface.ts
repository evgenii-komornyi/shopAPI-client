import { IDeliveryInfo } from './IDeliveryInfo.interface';

export interface IOrder extends IDeliveryInfo {
    totalPrice: number;
}
