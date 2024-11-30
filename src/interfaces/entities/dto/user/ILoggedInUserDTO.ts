import { BasicDTO } from '../BasicDTO';
import { AuthDetailsDTO } from './AuthDetailsDTO';

export interface ILoggedInUserDTO extends BasicDTO {
    user: AuthDetailsDTO;
}
