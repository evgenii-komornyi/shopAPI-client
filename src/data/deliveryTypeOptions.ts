import { DeliveryType } from '../enums/DeliveryTypes.enum';
import { IRadioOption } from '../interfaces/checkout/field-options/IRadioOption.interface';

export const deliveryTypeOptions: IRadioOption[] = [
    {
        value: DeliveryType.COURIER,
        label: 'Courier delivery',
        color: 'default',
    },
    {
        value: DeliveryType.SHOP,
        label: 'Pick up from the shop',
        color: 'default',
    },
];
