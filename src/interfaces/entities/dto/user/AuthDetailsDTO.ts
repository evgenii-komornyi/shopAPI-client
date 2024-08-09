import { ClientDetailsDTO } from '../client/ClientDetailsDTO';

export interface AuthDetailsDTO {
    id: number;
    uUserId: string;
    client: ClientDetailsDTO;
    token: string;
    exp: number;
}
