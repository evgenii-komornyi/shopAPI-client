import { Fragment } from 'react';
import { Snackbar, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useSnackbar } from '../../hooks/useSnackbar.hook';
import { ISnackbarHookReturn } from '../../interfaces/ISnackbarHookReturn';

export const SnackBar = () => {
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
            action={action}
        >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {snackbarMessage}
            </Alert>
        </Snackbar>
    );
};
