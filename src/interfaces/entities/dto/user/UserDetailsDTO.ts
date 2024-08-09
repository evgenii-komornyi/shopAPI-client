import { ClientDetailsDTO } from '../client/ClientDetailsDTO';

export interface UserDetailsDTO {
    id: number;
    email: string;
    createdAt: string;
    updatedAt: string;
    lastLoginAt: string;
    isActive: boolean;
    isVerified: boolean;
    uUserId: string;
    client: ClientDetailsDTO;
}
