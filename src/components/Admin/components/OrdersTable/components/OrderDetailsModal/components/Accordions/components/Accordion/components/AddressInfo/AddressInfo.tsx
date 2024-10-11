import { Chip, Typography } from '@mui/material';
import useAdminStore from '../../../../../../../../../../../../stores/useAdmin.store';
import {
    PropertyContainer,
    WrapperContainer,
} from '../../../../styles/Accordions.styles';

export const AddressInfo = () => {
    const address = useAdminStore(state => state.order?.client.address);

    return (
        <WrapperContainer>
            <PropertyContainer>
                <Typography>Country:</Typography>
                <Chip label={address?.country} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>City:</Typography>
                <Chip label={address?.city} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Postal Code:</Typography>
                <Chip label={address?.postalCode} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Address:</Typography>
                <Chip label={address?.address} variant="outlined" />
            </PropertyContainer>
        </WrapperContainer>
    );
};
