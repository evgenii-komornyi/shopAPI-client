import { DeliveryType } from '../../enums/DeliveryTypes.enum';

export interface IDeliveryInfo {
    deliveryType: DeliveryType;
    deliveryComment: string;
    deliveryPrice?: string;
    deliveryCountry?: string;
}
