import { BasicDTO } from '../../BasicDTO';
import { OrderByIdDetailsDTO } from './OrderByIdDetailsDTO';

export interface AdminOrderByIdDTO extends BasicDTO {
    order: OrderByIdDetailsDTO;
}
