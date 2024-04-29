import { IItem } from './IItem.interface';

export interface ICartItem extends IItem {
    quantity: number;
}
