import { Chip, Link, Tooltip, Typography } from '@mui/material';
import useAdminStore from '../../../../../../../../../../../../stores/useAdmin.store';
import {
    PropertyContainer,
    WrapperContainer,
} from '../../../../styles/Accordions.styles';
import { useState } from 'react';

export const ClientInfo = () => {
    const client = useAdminStore(state => state.order?.client);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const handleMouseOver = () => setIsHovered(true);

    const handleMouseOut = () => setIsHovered(false);

    return (
        <WrapperContainer>
            <PropertyContainer>
                <Typography>First Name:</Typography>
                <Chip label={client?.firstName} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Last Name:</Typography>
                <Chip label={client?.lastName} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Phone Number:</Typography>
                <Chip label={client?.phoneNumber} variant="outlined" />
            </PropertyContainer>

            <PropertyContainer>
                <Typography>Email:</Typography>
                <Link
                    href={`mailto:${client?.email}`}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    <Tooltip
                        title={`Send e-mail to ${client?.email}.`}
                        placement="top"
                        arrow
                    >
                        <Chip
                            label={client?.email}
                            variant="outlined"
                            color={!isHovered ? 'default' : 'success'}
                        />
                    </Tooltip>
                </Link>
            </PropertyContainer>
        </WrapperContainer>
    );
};
