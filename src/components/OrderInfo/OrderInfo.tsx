import { Fragment } from 'react';
import { Params, useParams } from 'react-router-dom';

import { Grid, Skeleton } from '@mui/material';

import { OrderItem } from './components/OrderItem';

import { useFetch } from '../../hooks/useFetch.hook';

import { IGetOrderResponse } from '../../interfaces/order/IGetOrderResponse.interface';
import { IFetchResponse } from '../../interfaces/fetch/IFetchResponse.interface';
import { IOrderItem } from '../../interfaces/order/IOrderItem.interface';

import {
    ItemsContainer,
    OrderInfoContainer,
    OrderItemsContainer,
    OrderNumberText,
    ThankYouTitle,
    TotalPriceText,
} from './styles/OrderInfo.styles';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_ORDERS_API_URL } = import.meta.env;

export const OrderInfo = () => {
    const { clientId, orderId }: Readonly<Params<string>> = useParams();

    const { data, isLoaded }: IFetchResponse<IGetOrderResponse> =
        useFetch<IGetOrderResponse>(
            `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ORDERS_API_URL}/${clientId}/${orderId}`
        );

    let orderNumber: string | undefined,
        items: IOrderItem[] | undefined,
        totalPrice: number | undefined;

    if (data) {
        orderNumber = data.orderId;
        items = data.items;
        totalPrice = data.totalPrice;
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <OrderInfoContainer>
                    {isLoaded ? (
                        <ThankYouTitle>Thank you!</ThankYouTitle>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            width={300}
                            height={30}
                            sx={{ mt: 4 }}
                        />
                    )}
                    {isLoaded ? (
                        <>
                            <OrderNumberText>
                                Your order nr. {orderNumber} was created.
                            </OrderNumberText>
                            <OrderNumberText>
                                We will contact you via email.
                            </OrderNumberText>
                        </>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            width={300}
                            height={200}
                            sx={{ mt: 4 }}
                        />
                    )}
                    {isLoaded ? (
                        <TotalPriceText>
                            Total price: &euro; {totalPrice}.
                        </TotalPriceText>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            width={300}
                            height={30}
                            sx={{ mt: 4 }}
                        />
                    )}
                </OrderInfoContainer>
            </Grid>
            <Grid item xs={12} md={6}>
                <OrderItemsContainer>
                    <ItemsContainer>
                        {isLoaded
                            ? items?.map((orderItem, index) => (
                                  <Fragment key={index}>
                                      <OrderItem orderItem={orderItem} />
                                  </Fragment>
                              ))
                            : [0, 0, 0].map((_, index) => (
                                  <Fragment key={index}>
                                      <Skeleton
                                          variant="rectangular"
                                          width="90%"
                                          height={70}
                                          sx={{ mt: 1 }}
                                      />
                                  </Fragment>
                              ))}
                    </ItemsContainer>
                </OrderItemsContainer>
            </Grid>
        </Grid>
    );
};
