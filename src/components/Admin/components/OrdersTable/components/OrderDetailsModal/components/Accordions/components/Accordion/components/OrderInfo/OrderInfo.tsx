import { Box, Chip, Typography } from '@mui/material';
import {
    PropertyContainer,
    WrapperContainer,
} from '../../../../styles/Accordions.styles';
import { formatPrice } from '../../../../../../../../../../../../helpers/price.helper';
import { SelectInput } from '../../../../../../../SelectInput';
import useAdminStore from '../../../../../../../../../../../../stores/useAdmin.store';

interface IProps {
    editMode: boolean;
    currentStatus: string;
    setCurrentStatus: (value: string) => void;
}

export const OrderInfo = ({
    editMode,
    currentStatus,
    setCurrentStatus,
}: IProps) => {
    const { order } = useAdminStore(state => state);
    const deliveryComment = order?.deliveryComment;

    const hasComment = Boolean(deliveryComment?.trim());

    return (
        <WrapperContainer>
            <PropertyContainer>
                <Typography>Order Date:</Typography>
                <Chip
                    label={new Intl.DateTimeFormat('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    }).format(new Date(order?.orderDate ?? ''))}
                    variant="outlined"
                />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Order Status: </Typography>

                <Box sx={{ ml: 1 }}>
                    {editMode ? (
                        <SelectInput
                            currentStatus={currentStatus}
                            setCurrentStatus={setCurrentStatus}
                        />
                    ) : (
                        <Chip label={order?.orderStatus} variant="outlined" />
                    )}
                </Box>
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Total Price:</Typography>
                <Chip
                    label={formatPrice(order?.totalPrice ?? 0)}
                    variant="outlined"
                />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Delivery Price:</Typography>
                <Chip
                    label={formatPrice(order?.deliveryPrice ?? 0)}
                    variant="outlined"
                />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Delivery Type:</Typography>
                <Chip label={order?.deliveryType} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Delivery Comment:</Typography>
                <Chip
                    label={hasComment ? deliveryComment : 'No comments'}
                    variant="outlined"
                    color={order?.deliveryComment ? 'default' : 'success'}
                />
            </PropertyContainer>
        </WrapperContainer>
    );
};
