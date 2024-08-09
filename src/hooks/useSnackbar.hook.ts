import { SyntheticEvent } from 'react';
import useSnackbarStore from '../stores/useSnackbar.store';
import { ISnackbarHookReturn } from '../interfaces/ISnackbarHookReturn';

export const useSnackbar = (): ISnackbarHookReturn => {
    const { isSnackbarOpened, setIsSnackbarOpened, snackbarMessage } =
        useSnackbarStore(state => state);

    const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpened(false);
    };

    return {
        isSnackbarOpened,
        snackbarMessage,
        handleClose,
    };
};
