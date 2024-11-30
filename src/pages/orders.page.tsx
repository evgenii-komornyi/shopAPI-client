import { Container } from '@mui/material';
import { Orders } from '../components/Orders';

export const OrdersPage = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 2 }}>
            <Orders />
        </Container>
    );
};
