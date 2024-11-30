import { Container } from '@mui/material';
import { EmailVerification } from '../components/Auth/components/EmailVerification/EmailVerification';

export const VerificationPage = () => {
    return (
        <Container maxWidth="lg">
            <EmailVerification />
        </Container>
    );
};
