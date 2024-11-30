import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';

interface IProps {
    errors: string[];
}

export const ErrorsSnackbar = ({ errors }: IProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsOpen(false);
    };

    useEffect(() => {
        setIsOpen(true);
    }, [errors]);

    return (
        <Snackbar
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {errors.map((error, index) => (
                    <div
                        key={index}
                        style={{ display: 'flex', flexDirection: 'column' }}
                    >{`${error} `}</div>
                ))}
            </Alert>
        </Snackbar>
    );
};
