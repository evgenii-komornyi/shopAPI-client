import { useEffect } from 'react';
import {
    Params,
    NavigateFunction,
    useNavigate,
    useParams,
} from 'react-router-dom';
import useAuthStore from '../../../../stores/useAuth.store';
import useSnackbarStore from '../../../../stores/useSnackbar.store';
import { SnackBar } from '../../../SnackBar';
import { Box, Typography } from '@mui/material';

let timeout: number;

export const EmailVerification = () => {
    const { emailToken }: Readonly<Params<string>> = useParams();
    const navigate: NavigateFunction = useNavigate();
    const { verifyEmail, validationErrors, status } = useAuthStore(
        state => state
    );
    const { setIsSnackbarOpened, setSnackbarMessage } = useSnackbarStore(
        state => state
    );

    useEffect(() => {
        if (emailToken) {
            verifyEmail(emailToken);

            if (status === 'Success') {
                setSnackbarMessage('You are verified successfully!');
                setIsSnackbarOpened(true);

                timeout = setTimeout(() => navigate('/auth'), 4000);
            }
        }

        return () => clearTimeout(timeout);
    }, [emailToken, status]);

    return status === 'Failed' && validationErrors.length !== 0 ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', m: 5, p: 2 }}>
            {validationErrors.map((error, index) => (
                <Typography variant="h4" key={index}>
                    {error}
                </Typography>
            ))}
        </Box>
    ) : (
        <SnackBar />
    );
};
