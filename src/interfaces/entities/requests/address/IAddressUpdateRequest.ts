import { ITokenizedRequest } from '../ITokenizedRequest';

export interface IAddressUpdateRequest extends ITokenizedRequest {
    addressId: number;
    address: string;
}
