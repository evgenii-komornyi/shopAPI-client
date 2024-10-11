import { DeliveryType } from '../enums/DeliveryTypes.enum';

export interface IFormField {
    email?: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    password: string;
    passwordConfirmation: string;
    country?: string;
    city?: string;
    postalCode?: string;
    deliveryType: DeliveryType;
    deliveryComment: string;
    address?: string;
}
