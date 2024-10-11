import { BasicDTO } from '../../BasicDTO';
import { StatusDetailsDTO } from './StatusDetailsDTO';

export interface StatusesDTO extends BasicDTO {
    statuses: StatusDetailsDTO[];
}
