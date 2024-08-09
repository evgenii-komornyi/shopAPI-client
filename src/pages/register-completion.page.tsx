import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import useAuthStore from '../stores/useAuth.store';
import { useNavigate } from 'react-router-dom';

export const RegisterCompletionPage = () => {
    const { message, clearMessage } = useAuthStore(state => state);
    const navigate = useNavigate();
    const [timer, setTimer] = useState<number>(10);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prev => (prev <= 0 ? 0 : prev - 1));
        }, 1000);

        const timeoutId = setTimeout(() => {
            navigate('/');
            clearMessage();
        }, 10000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        };
    }, [navigate, clearMessage]);

    return (
        <Container maxWidth="lg">
            <Typography variant="h4">{message}</Typography>
            <Typography variant="h5">
                Redirect to main page in {timer} sec.
            </Typography>
        </Container>
    );
};
