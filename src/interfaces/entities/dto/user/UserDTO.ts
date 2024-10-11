import { BasicDTO } from '../BasicDTO';
import { UserDetailsDTO } from './UserDetailsDTO';

export interface UserDTO extends BasicDTO {
    user: UserDetailsDTO;
}
