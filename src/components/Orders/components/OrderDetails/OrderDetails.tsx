import { useMemo } from 'react';
import useOrderStore from '../../../../stores/useOrder.store';
import { Loader, OrderDetailsContainer } from '../../styles/Orders.styles';
import { Typography } from '@mui/material';
import { Order } from './components/Order';

export const OrderDetails = () => {
    const { order, isOrderLoaded } = useOrderStore(state => state);

    const wasOrderLoaded = useMemo(
        (): boolean => Object.keys(order).length !== 0 && order.id !== 0,
        [order]
    );

    const checkIsOrderLoaded = () => {
        if (!wasOrderLoaded) {
            return <Typography variant="h4">Order is not selected</Typography>;
        }

        if (!isOrderLoaded) {
            return <Loader />;
        }

        return <Order />;
    };

    return (
        <OrderDetailsContainer
            $wasOrderLoaded={wasOrderLoaded && isOrderLoaded}
        >
            {checkIsOrderLoaded()}
        </OrderDetailsContainer>
    );
};
