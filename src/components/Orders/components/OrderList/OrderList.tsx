import { useEffect, useMemo, useState } from 'react';
import useOrderStore from '../../../../stores/useOrder.store';
import {
    OrderContainer,
    OrderSpan,
    OrderListContainer,
    OrderDate,
    StatusContainer,
} from '../../styles/Orders.styles';
import { Chip, Typography } from '@mui/material';

export const OrderList = () => {
    const { orders, getOrders, getOrder, resetSelectedOrder } = useOrderStore(
        state => state
    );
    const [selectedId, setSelectedId] = useState<number>(0);

    useEffect(() => {
        void getOrders();

        return () => resetSelectedOrder();
    }, []);

    const getCurrentOrder = (orderId: number): void => {
        void getOrder(orderId, true);
        setSelectedId(orderId);
    };

    const isActive = useMemo(
        () => (orderId: number) => orderId === selectedId,
        [selectedId]
    );

    return (
        <OrderListContainer $hasOrders={orders.length !== 0}>
            {orders.length === 0 ? (
                <Typography variant="h5">
                    You do not have any orders.
                </Typography>
            ) : (
                orders.map((orderItem, index) => (
                    <OrderContainer
                        key={index}
                        $isActive={isActive(+orderItem.uOrderId)}
                    >
                        <StatusContainer>
                            <Chip
                                label={orderItem.orderStatus.toUpperCase()}
                                variant="outlined"
                            />
                        </StatusContainer>
                        <OrderSpan
                            $isActive={isActive(+orderItem.uOrderId)}
                            onClick={() => getCurrentOrder(+orderItem.uOrderId)}
                        >
                            <Typography variant="body1" fontSize={18}>
                                Order: {orderItem.uOrderId}
                            </Typography>
                            <OrderDate variant="body2" fontSize={12}>
                                (
                                {new Intl.DateTimeFormat('en-US', {
                                    weekday: 'short',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }).format(new Date(orderItem.orderDate))}
                                )
                            </OrderDate>
                        </OrderSpan>
                    </OrderContainer>
                ))
            )}
        </OrderListContainer>
    );
};
