import { IOrderItem } from '../../../IOrderItem.interface';
import { ClientDetailsDTO } from '../../client/ClientDetailsDTO';
import { AdminOrderDetailsDTO } from './AdminOrderDetailsDTO';

export interface OrderByIdDetailsDTO extends AdminOrderDetailsDTO {
    deliveryPrice: number;
    orderItems: IOrderItem[];
    client: ClientDetailsDTO;
    totalPrice: number;
}
