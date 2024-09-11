import { Container } from '@mui/material';
import { useEffect } from 'react';
import useAuthStore from '../stores/useAuth.store';
import { NavigateFunction, useNavigate } from 'react-router-dom';

export const AdminPage = () => {
    const { user: authUser } = useAuthStore(state => state);
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!authUser.roles.includes('ADMIN')) {
            navigate('/');
        }
    }, []);

    return (
        <Container maxWidth="lg">
            <h1>AdminPanelPage</h1>
        </Container>
    );
};
