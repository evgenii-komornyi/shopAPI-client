import { ClientDetailsDTO } from '../client/ClientDetailsDTO.ts';
import { OrderBasicDTO } from './OrderBasicDTO.ts';

export interface OrderDetailsDTO extends OrderBasicDTO {
    client: ClientDetailsDTO;
}
