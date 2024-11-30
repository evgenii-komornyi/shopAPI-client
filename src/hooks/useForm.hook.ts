import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { useCheckOnErrors } from './useCheckOnErrors.hook';
import { IFormHookReturns } from '../interfaces/IFormHookReturns.interface';
import { IFormField } from '../interfaces/IFormField.interface';
import { IPasswordTypeVisibility } from '../interfaces/IPasswordTypeVisibility.interface';
import { DeliveryType } from '../enums/DeliveryTypes.enum';
import { IOrderInfo } from '../interfaces/entities/IOrderInfo.interface';
import { AxiosResponse } from 'axios';
import { ICreateOrderResponse } from '../interfaces/entities/ICreateOrderResponse.interface';
import { handleError } from '../helpers/api.helper';
import { IControlProps } from '../interfaces/checkout/IControlProps.interface';
import useCartStore from '../stores/useCart.store';
import { useNavigate } from 'react-router-dom';
import { IUserCreateRequest } from '../interfaces/entities/requests/user/IUserCreateRequest';
import useAuthStore from '../stores/useAuth.store';
import useUserStore from '../stores/useUser.store';
import { IOrderRequest } from '../interfaces/entities/requests/order/IOrderRequest';
import { getCookie } from '../helpers/cookie.helper';

import {
    createOrder as createOrderForAnonymousUserApi,
    createSecuredOrder,
} from '../api/orders.api';
import { OrderResponse } from '../interfaces/entities/responses/order/OrderResponse';
import useDeliveryStore from '../stores/useDelivery.store';

export const useForm = (isCheckoutForm: boolean): IFormHookReturns => {
    const { cart, clearCart } = useCartStore(state => state);
    const { user } = useUserStore(state => state);
    const { registerUser } = useAuthStore(state => state);
    const {
        price: deliveryPrice,
        country: deliveryCountry,
        getDeliveryPriceByCountry,
        setShowDeliveryPrice,
    } = useDeliveryStore(state => state);
    const navigate = useNavigate();

    const [fieldType, setFieldType] = useState<IPasswordTypeVisibility>({
        password: false,
        passwordConfirmation: false,
    });

    const handleChangeFieldType = (field: string): void => {
        if (field === 'password') {
            setFieldType(prevState => ({
                ...prevState,
                password: !prevState.password,
            }));
        } else {
            setFieldType(prevState => ({
                ...prevState,
                passwordConfirmation: !prevState.passwordConfirmation,
            }));
        }
    };

    const checkType = (name: string, type: string): string => {
        if (name === 'password' || name === 'passwordConfirmation') {
            return fieldType[name] ? 'text' : 'password';
        }

        return type;
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ): void => {
        event.preventDefault();
    };

    const [userInputs, setUserInputs] = useState<IFormField>({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        passwordConfirmation: '',
        country: 'Latvia',
        city: '',
        postalCode: '',
        deliveryType: DeliveryType.COURIER,
        deliveryComment: '',
        address: '',
    });

    useEffect(() => {
        if (user.id !== 0) {
            setUserInputs({
                email: user.client.email,
                firstName: user.client.firstName,
                lastName: user.client.lastName,
                phoneNumber: user.client.phoneNumber,
                password: '',
                passwordConfirmation: '',
                country: user.client.address?.country,
                city: user.client.address?.city,
                postalCode: user.client.address?.postalCode,
                deliveryType: DeliveryType.COURIER,
                deliveryComment: '',
                address: user.client.address?.address,
            });
        }
    }, [user]);

    useEffect(() => {
        if (userInputs.country) getDeliveryPriceByCountry(userInputs.country);
        if (userInputs.deliveryType === DeliveryType.SHOP) {
            setShowDeliveryPrice(false);
        } else {
            setShowDeliveryPrice(true);
        }
    }, [
        getDeliveryPriceByCountry,
        setShowDeliveryPrice,
        userInputs.country,
        userInputs.deliveryType,
    ]);

    const { validationErrors, checkFieldValueByName, isButtonDisabled } =
        useCheckOnErrors(userInputs, isCheckoutForm);

    const onChangeHandler = useCallback(
        (
            event:
                | SelectChangeEvent<HTMLInputElement | string>
                | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ): void => {
            const { name, value } = event.target;

            const correctValue =
                typeof value === 'string' ? value : value.value;

            setUserInputs(prevState => ({
                ...prevState,
                [name]:
                    name === 'postalCode'
                        ? correctValue.toUpperCase()
                        : correctValue,
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

    const register = (): void => {
        const {
            email,
            firstName,
            lastName,
            phoneNumber,
            password,
            country,
            city,
            postalCode,
            address,
        } = userInputs;

        const userRequest: IUserCreateRequest = {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            country,
            city,
            postalCode,
            address,
        };

        registerUser(userRequest);
    };

    const controlProps = (item: string): IControlProps => ({
        checked: userInputs.deliveryType.toString() === item,
        onChange: onChangeHandler,
        value: item.trim(),
        name: 'deliveryType',
        inputProps: { 'aria-label': item },
    });

    const buy = async () => {
        if (user.id === 0) {
            await createOrderForAnonymousUser();
        } else {
            await createOrderForLoggedInUser();
        }
    };

    const createOrderForAnonymousUser = async (): Promise<void> => {
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
                ...(deliveryType !== DeliveryType.SHOP && {
                    deliveryPrice,
                    deliveryCountry,
                }),
            },
            cart: cart[user.id].map(({ itemId, actualPrice, quantity }) => ({
                itemId,
                actualPrice,
                quantity,
            })),
        };

        try {
            const response: AxiosResponse<ICreateOrderResponse> =
                await createOrderForAnonymousUserApi(orderInfo);

            if (response) {
                const { orderId, clientId } = response.data;

                clearCart(user.id);
                navigate(`/thankyou/${clientId}/${orderId}`);
            }
        } catch (error) {
            handleError(error as Error);
        }
    };

    const createOrderForLoggedInUser = async (): Promise<void> => {
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

        const orderInfo: IOrderRequest = {
            client: { email, firstName, lastName, phoneNumber },
            ...(deliveryType !== DeliveryType.SHOP && {
                address: { country, city, address, postalCode },
            }),
            orderInfo: {
                deliveryType,
                deliveryComment,
                ...(deliveryType !== DeliveryType.SHOP && {
                    deliveryPrice,
                    deliveryCountry,
                }),
            },
            cart: cart[user.id].map(({ itemId, actualPrice, quantity }) => ({
                itemId,
                actualPrice,
                quantity,
            })),
            token: getCookie('token'),
        };

        try {
            const response: AxiosResponse<OrderResponse> =
                await createSecuredOrder(orderInfo);

            if (response) {
                const {
                    data: {
                        order: { uOrderId },
                    },
                } = response.data;

                clearCart(user.id);
                navigate(`/thankyou/${uOrderId}`);
            }
        } catch (error) {
            handleError(error as Error);
        }
    };

    return {
        userInputs,
        validationErrors,
        fieldType,
        handleMouseDownPassword,
        handleChangeFieldType,
        checkType,
        onChangeHandler,
        onBlurHandler,
        isButtonDisabled,
        register,
        buy,
        controlProps,
    };
};
