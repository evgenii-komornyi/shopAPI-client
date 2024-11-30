import { BasicDTO } from '../BasicDTO';
import { ClientDetailsDTO } from './ClientDetailsDTO';

export interface ClientDTO extends BasicDTO {
    client: ClientDetailsDTO;
}
