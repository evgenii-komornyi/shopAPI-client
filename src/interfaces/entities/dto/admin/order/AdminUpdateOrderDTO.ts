import { BasicDTO } from '../../BasicDTO';
import { AdminOrderDetailsDTO } from './AdminOrderDetailsDTO';

export interface AdminUpdateOrderDTO extends BasicDTO {
    order: AdminOrderDetailsDTO;
}
