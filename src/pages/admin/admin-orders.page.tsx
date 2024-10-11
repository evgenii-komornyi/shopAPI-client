import { useEffect } from 'react';
import { OrdersTable } from '../../components/Admin/components/OrdersTable';
import useAdminStore from '../../stores/useAdmin.store';

export const AdminOrdersPage = () => {
    const { getStatusesAndOrders } = useAdminStore(state => state);

    useEffect(() => {
        getStatusesAndOrders();
    }, []);

    return <OrdersTable />;
};
