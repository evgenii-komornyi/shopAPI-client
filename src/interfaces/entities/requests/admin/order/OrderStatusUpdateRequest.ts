import { ITokenizedRequest } from '../../ITokenizedRequest';

export interface OrderStatusUpdateRequest extends ITokenizedRequest {
    orderId: number;
    statusId: number;
}
