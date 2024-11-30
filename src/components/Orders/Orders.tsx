import useOrderStore from '../../stores/useOrder.store';
import { OrderDetails } from './components/OrderDetails';
import { OrderList } from './components/OrderList';
import { OrdersContainer } from './styles/Orders.styles';

export const Orders = () => {
    return (
        <OrdersContainer>
            <OrderList />
            <OrderDetails />
        </OrdersContainer>
    );
};
