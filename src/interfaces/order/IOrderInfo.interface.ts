import { IClient } from './IClient.interface';
import { IAddress } from './IAddress.interface';
import { IOrder } from './IOrder.interface';
import { ICartItem } from '../ICartItem.interface';

export interface IOrderInfo {
    client: IClient;
    address: IAddress;
    orderInfo: IOrder;
    cart: ICartItem[];
}
