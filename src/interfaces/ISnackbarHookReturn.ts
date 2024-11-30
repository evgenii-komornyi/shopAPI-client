import { SyntheticEvent } from 'react';

export interface ISnackbarHookReturn {
    isSnackbarOpened: boolean;
    snackbarMessage: string;
    handleClose: (event: SyntheticEvent | Event, reason?: string) => void;
}
