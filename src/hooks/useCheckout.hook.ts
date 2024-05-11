import { ChangeEvent, useState } from 'react';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { formatPrice } from '../helpers/cart.helper';

import { DeliveryType } from '../enums/deliveryTypes.enum';

import useCartStore from '../stores/useCart.store';
import { createOrder } from '../api/orders.api';

import { ICreateOrderResponse } from '../interfaces/order/ICreateOrderResponse.interface';
import { IClient } from '../interfaces/order/IClient.interface';
import { IAddress } from '../interfaces/order/IAddress.interface';
import { IDeliveryInfo } from '../interfaces/order/IDeliveryInfo.interface';
import { IOrderInfo } from '../interfaces/order/IOrderInfo.interface';
import { SelectChangeEvent } from '@mui/material';

interface IState extends IClient, IAddress, IDeliveryInfo {}

interface IControlProps {
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
    inputProps: {
        'aria-label': string;
    };
}

interface IHookReturns {
    fields: IState;
    isButtonDisabled: boolean;
    buy: () => Promise<void>;
    controlProps: (item: string) => IControlProps;
    onChangeHandler: (
        event:
            | SelectChangeEvent<HTMLInputElement | string>
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
}

interface IReduceItem {
    actualPrice: number;
    quantity: number;
}

export const useCheckout = (): IHookReturns => {
    const { cart, clearCart } = useCartStore(state => state);

    const navigate = useNavigate();

    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

    const [fields, setFields] = useState<IState>({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        deliveryType: DeliveryType.courier,
        country: '',
        city: '',
        postalCode: '',
        address: '',
        deliveryComment: '',
    });

    const onChangeHandler = (
        event:
            | SelectChangeEvent<HTMLInputElement | string>
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        const { name, value } = event.target;

        setFields(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const controlProps = (item: string): IControlProps => ({
        checked: fields.deliveryType.toString() === item,
        onChange: onChangeHandler,
        value: item,
        name: 'deliveryType',
        inputProps: { 'aria-label': item },
    });

    const buy = async () => {
        setIsButtonDisabled(true);

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
        } = fields;

        const orderInfo: IOrderInfo = {
            client: { email, firstName, lastName, phoneNumber },
            address: { country, city, address, postalCode },
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
            cart,
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

    return { fields, buy, controlProps, onChangeHandler, isButtonDisabled };
};
