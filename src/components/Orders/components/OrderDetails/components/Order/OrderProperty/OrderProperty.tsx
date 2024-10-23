import { Typography } from '@mui/material';
import { PropertyContainer } from '../styles/Order';

interface IProps {
    propertyName: string;
    property?: string | number;
}

export const OrderProperty = ({ propertyName, property }: IProps) => {
    return (
        <PropertyContainer>
            <Typography variant="body2">{propertyName}:</Typography>
            {property && <Typography variant="body2">{property}</Typography>}
        </PropertyContainer>
    );
};
