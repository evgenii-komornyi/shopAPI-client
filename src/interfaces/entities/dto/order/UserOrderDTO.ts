import { OrderBasicDTO } from './OrderBasicDTO';

export type UserOrderDTO = Pick<
    OrderBasicDTO,
    'id' | 'uOrderId' | 'orderStatus' | 'orderDate'
>;
