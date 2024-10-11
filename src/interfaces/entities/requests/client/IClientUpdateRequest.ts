import { ITokenizedRequest } from '../ITokenizedRequest';

export interface IClientUpdateRequest extends ITokenizedRequest {
    clientId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}
