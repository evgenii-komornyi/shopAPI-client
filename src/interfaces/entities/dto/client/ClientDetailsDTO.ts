import { AddressDetailsDTO } from '../address/AddressDetailsDTO';

export interface ClientDetailsDTO {
    id: number;
    firstName: string;
    lastName: string;
    email?: string;
    phoneNumber: string;
    uClientId?: string;
    address?: AddressDetailsDTO;
    userId?: number;
}
