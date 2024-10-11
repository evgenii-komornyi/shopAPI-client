import {
    Box,
    Button,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    IconButton,
    Tooltip,
} from '@mui/material';
import useModalStore from '../../../../../../stores/useModal.store';
import { Close, Edit, EditOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import useAdminStore from '../../../../../../stores/useAdmin.store';
import { Accordions } from './components/Accordions/Accordions';

import {
    TitleContainer,
    TitleDetails,
} from './styles/OrderDetailsModal.styles';

export const OrderDetailsModal = () => {
    const { setIsModalOpened, orderId, isModalOpened, setOrderId } =
        useModalStore(state => state);
    const {
        getStatusesAndOrders,
        getOrderById,
        statuses,
        order,
        isOrderLoaded,
        updateOrderStatus,
        reset,
    } = useAdminStore(state => state);

    const [currentStatus, setCurrentStatus] = useState('');

    useEffect(() => {
        if (orderId) {
            getOrderById(orderId);
        }

        if (order) {
            setCurrentStatus(order.orderStatus);
        }

        return () => {
            setOrderId(null);
        };
    }, [orderId, getOrderById, setOrderId, order]);

    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleChangeEditMode = () => {
        setIsEditMode(prevState => !prevState);
    };

    const handleSaveChanges = () => {
        const statusByValue = statuses.find(
            ({ status }) => status === currentStatus
        );

        if (statusByValue && order) {
            updateOrderStatus(order.id, statusByValue.id);
            getStatusesAndOrders();
            handleClose();
            reset();
            setIsEditMode(false);
        }
    };

    const handleClose = () => {
        setIsModalOpened(false);
        setIsEditMode(false);
    };

    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={isModalOpened}
        >
            {isOrderLoaded ? (
                <>
                    <Tooltip
                        disableFocusListener
                        title={`Edit mode ${isEditMode ? 'OFF' : ' ON'}`}
                    >
                        <IconButton
                            aria-label="edit"
                            onClick={handleChangeEditMode}
                            sx={theme => ({
                                position: 'absolute',
                                left: 8,
                                top: 8,
                                color: !isEditMode
                                    ? theme.palette.grey[500]
                                    : theme.palette.grey[50],
                            })}
                        >
                            {isEditMode ? <Edit /> : <EditOutlined />}
                        </IconButton>
                    </Tooltip>
                    <TitleContainer
                        sx={{ m: 0, p: 2 }}
                        id="customized-dialog-title"
                    >
                        Order №:
                        <TitleDetails>{order?.uOrderId}</TitleDetails>
                    </TitleContainer>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={theme => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <Close />
                    </IconButton>
                    <DialogContent dividers>
                        <Accordions
                            editMode={isEditMode}
                            currentStatus={currentStatus}
                            setCurrentStatus={setCurrentStatus}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            autoFocus
                            variant="outlined"
                            onClick={handleSaveChanges}
                        >
                            Save changes
                        </Button>
                        <Button variant="outlined" onClick={handleClose}>
                            Discard changes
                        </Button>
                    </DialogActions>
                </>
            ) : (
                <Box
                    sx={{
                        display: 'flex',
                        width: 100,
                        height: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <CircularProgress />
                </Box>
            )}
        </Dialog>
    );
};
