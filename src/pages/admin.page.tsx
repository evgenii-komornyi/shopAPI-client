import { Container } from '@mui/material';
import { useEffect } from 'react';
import useAuthStore from '../stores/useAuth.store';
import { NavigateFunction, Outlet, useNavigate } from 'react-router-dom';
import useAdminStore from '../stores/useAdmin.store';
import useSnackbarStore from '../stores/useSnackbar.store';
import { errorCodes } from '../data/errorCodes';
import { SnackBar } from '../components/SnackBar';

import { AdminHeader } from '../components/Admin/components/Header';

export const AdminPage = () => {
    const { user: authUser } = useAuthStore(state => state);
    const { errorCode } = useAdminStore(state => state);
    const { setSnackbarMessage, setIsSnackbarOpened } = useSnackbarStore(
        state => state
    );
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        if (!authUser.roles.includes('ADMIN')) {
            navigate('/');
        }
    }, [authUser.roles]);

    useEffect(() => {
        if (errorCode !== 0) {
            setSnackbarMessage(errorCodes[errorCode]);
            setIsSnackbarOpened(true);
        }
    }, [errorCode]);

    return (
        <Container maxWidth="lg">
            <AdminHeader />
            <Outlet />

            {errorCode !== 0 && <SnackBar severity="error" />}
        </Container>
    );
};
