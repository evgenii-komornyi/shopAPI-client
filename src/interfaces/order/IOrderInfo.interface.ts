import { IClient } from './IClient.interface';
import { IAddress } from './IAddress.interface';
import { IOrder } from './IOrder.interface';

interface ICartItemOrder {
    itemId: number;
    actualPrice: number;
    quantity: number;
}
export interface IOrderInfo {
    client: IClient;
    address?: IAddress;
    orderInfo: IOrder;
    cart: ICartItemOrder[];
}
