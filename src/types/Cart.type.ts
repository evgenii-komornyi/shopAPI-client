import { ICartItem } from '../interfaces/ICartItem.interface';

export type Cart = Record<number, ICartItem[]>;
