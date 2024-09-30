import { BasicDTO } from '../../BasicDTO';
import { AdminOrderDetailsDTO } from './AdminOrderDetailsDTO';

export interface AdminOrdersDTO extends BasicDTO {
    orders: AdminOrderDetailsDTO[];
}
