import { Grid, Skeleton } from '@mui/material';
import {
    ItemsContainer,
    OrderInfoContainer,
    OrderItemsContainer,
    OrderNumberText,
    ThankYouTitle,
} from '../../styles/OrderInfo.styles';
import { OrderItem } from '../OrderItem';
import useOrderStore from '../../../../stores/useOrder.store';
import { useEffect, Fragment } from 'react';
import { Params, useParams } from 'react-router-dom';

export const LoggedInUsersOrder = () => {
    const { order, getOrder, isLoaded } = useOrderStore(state => state);
    const { orderId }: Readonly<Params<string>> = useParams();

    useEffect(() => {
        void getOrder(orderId ? +orderId : 0);
    }, [orderId]);

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
                                Your order nr. {order.uOrderId} was created.
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
                </OrderInfoContainer>
            </Grid>
            <Grid item xs={12} md={6}>
                <OrderItemsContainer>
                    <ItemsContainer>
                        {isLoaded && order.orderItems
                            ? order.orderItems.map((orderItem, index) => (
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
