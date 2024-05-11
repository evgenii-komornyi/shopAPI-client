import { DeliveryType } from '../../enums/deliveryTypes.enum';

export interface IDeliveryInfo {
    deliveryType: DeliveryType;
    deliveryComment: string;
}
