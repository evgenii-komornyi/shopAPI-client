import { BasicDTO } from '../BasicDTO';
import { AddressDetailsDTO } from './AddressDetailsDTO';

export interface AddressDTO extends BasicDTO {
    address: AddressDetailsDTO;
}
