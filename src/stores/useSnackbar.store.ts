import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface ISnackbarState {
    isSnackbarOpened: boolean;
    snackbarMessage: string;

    setSnackbarMessage: (message: string) => void;
    setIsSnackbarOpened: (isOpened: boolean) => void;
}

const useSnackbarStore = create<ISnackbarState>()(
    devtools(set => ({
        isSnackbarOpened: false,
        snackbarMessage: '',

        setSnackbarMessage: (message: string): void => {
            set({ snackbarMessage: message });
        },

        setIsSnackbarOpened: (isOpened: boolean): void => {
            set({ isSnackbarOpened: isOpened });
        },
    }))
);

export default useSnackbarStore;
