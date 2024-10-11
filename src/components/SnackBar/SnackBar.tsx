import { Fragment } from 'react';
import { Snackbar, IconButton, Alert, AlertColor } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useSnackbar } from '../../hooks/useSnackbar.hook';
import { ISnackbarHookReturn } from '../../interfaces/ISnackbarHookReturn';

interface IProps {
    severity?: AlertColor;
}

export const SnackBar = ({ severity = 'success' }: IProps) => {
    const {
        handleClose,
        isSnackbarOpened,
        snackbarMessage,
    }: ISnackbarHookReturn = useSnackbar();

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    return (
        <Snackbar
            open={isSnackbarOpened}
            autoHideDuration={10000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            action={action}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
};
