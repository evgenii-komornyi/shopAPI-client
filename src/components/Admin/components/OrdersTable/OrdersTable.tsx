import { Paper, Skeleton, Typography } from '@mui/material';
import useAdminStore from '../../../../stores/useAdmin.store';
import { Table } from '../../../Table';
import { useTable } from '../../../../hooks/admin/useTable.hook';
import { ITableHook } from '../../../../interfaces/admin/ITableHook';
import {
    GridActionsCellItem,
    GridColDef,
    GridRowParams,
} from '@mui/x-data-grid';
import { EditOutlined } from '@mui/icons-material';
import useModalStore from '../../../../stores/useModal.store';
import { OrderDetailsModal } from './components/OrderDetailsModal';

export const OrdersTable = () => {
    const { orders, isOrdersLoaded: isLoaded } = useAdminStore(state => state);
    const { rows, columns, hiddenFields }: ITableHook = useTable(orders);
    const { setOrderId, setIsModalOpened } = useModalStore(state => state);

    const columnsWithActions: GridColDef[] = [
        ...columns,
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }: GridRowParams) => {
                const handleClick = () => {
                    setOrderId(+id);
                    setIsModalOpened(true);
                };

                return [
                    <GridActionsCellItem
                        key={id}
                        icon={<EditOutlined />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleClick}
                        color="inherit"
                    />,
                ];
            },
        },
    ];

    return (
        <>
            <Paper sx={{ height: 400, width: '100%' }}>
                {isLoaded ? (
                    orders.length > 0 ? (
                        <Table
                            rows={rows}
                            columns={columnsWithActions}
                            hiddenFields={hiddenFields}
                        />
                    ) : (
                        <Typography variant="h4">No Orders</Typography>
                    )
                ) : (
                    <Skeleton
                        width="100%"
                        height={400}
                        variant="rectangular"
                        animation="pulse"
                    />
                )}
            </Paper>
            <OrderDetailsModal />
        </>
    );
};
