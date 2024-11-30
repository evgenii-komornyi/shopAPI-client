import { BasicDTO } from '../BasicDTO.ts';
import { OrderDetailsDTO } from './OrderDetailsDTO.ts';

export interface OrderDTO extends BasicDTO {
    order: OrderDetailsDTO;
}
