import { ChangeEvent, useCallback, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { formatPrice } from '../helpers/cart.helper';
import { createOrder } from '../api/orders.api';

import useCartStore from '../stores/useCart.store';

import { DeliveryType } from '../enums/DeliveryTypes.enum';

import { ICreateOrderResponse } from '../interfaces/order/ICreateOrderResponse.interface';
import { IOrderInfo } from '../interfaces/order/IOrderInfo.interface';
import { ICheckoutField } from '../interfaces/checkout/ICheckoutField.interface';
import { IControlProps } from '../interfaces/checkout/IControlProps.interface';
import { useCheckOnErrors } from './useCheckOnErrors.hook';
import { ICheckoutHookReturns } from '../interfaces/checkout/hook/ICheckoutHookReturns.interface';
import { IReduceItem } from '../interfaces/checkout/hook/IReduceItem.interface';

export const useCheckout = (): ICheckoutHookReturns => {
    const { cart, clearCart } = useCartStore(state => state);

    const navigate = useNavigate();

    const [userInputs, setUserInputs] = useState<ICheckoutField>({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        deliveryType: DeliveryType.COURIER,
        country: 'Latvia',
        city: '',
        postalCode: '',
        address: '',
        deliveryComment: '',
    });

    const { validationErrors, checkFieldValueByName, isButtonDisabled } =
        useCheckOnErrors(userInputs);

    const onChangeHandler = useCallback(
        (
            event:
                | SelectChangeEvent<HTMLInputElement | string>
                | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ): void => {
            const { name, value } = event.target;

            const trimmedValue =
                typeof value === 'string' ? value.trim() : value.value.trim();

            setUserInputs(prevState => ({
                ...prevState,
                [name]: trimmedValue,
            }));
        },
        []
    );

    const onBlurHandler = useCallback(
        (fieldName: string, fieldValue: string): void => {
            checkFieldValueByName(fieldName, fieldValue.trim());
        },
        [checkFieldValueByName]
    );

    const controlProps = (item: string): IControlProps => ({
        checked: userInputs.deliveryType.toString() === item,
        onChange: onChangeHandler,
        value: item.trim(),
        name: 'deliveryType',
        inputProps: { 'aria-label': item },
    });

    const buy = async () => {
        const {
            email,
            firstName,
            lastName,
            phoneNumber,
            country,
            city,
            address,
            postalCode,
            deliveryType,
            deliveryComment,
        } = userInputs;

        const orderInfo: IOrderInfo = {
            client: { email, firstName, lastName, phoneNumber },
            ...(deliveryType !== DeliveryType.SHOP && {
                address: { country, city, address, postalCode },
            }),
            orderInfo: {
                deliveryType,
                deliveryComment,
                totalPrice: Number(
                    formatPrice(
                        cart.reduce(
                            (total: number, item: IReduceItem) =>
                                total + item.actualPrice * item.quantity,
                            0
                        )
                    )
                ),
            },
            cart: cart.map(({ itemId, actualPrice, quantity }) => ({
                itemId,
                actualPrice,
                quantity,
            })),
        };

        try {
            const response: AxiosResponse<ICreateOrderResponse> =
                await createOrder(orderInfo);

            if (response) {
                const { orderId, clientId } = response.data;

                clearCart();
                navigate(`/thankyou/${clientId}/${orderId}`);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return {
        userInputs,
        validationErrors,
        buy,
        controlProps,
        onChangeHandler,
        onBlurHandler,
        isButtonDisabled,
    };
};
