import { ChangeEvent, useEffect, useState } from 'react';
import useUserStore from '../stores/useUser.store';
import { IClientUpdateRequest } from '../interfaces/entities/requests/client/IClientUpdateRequest';
import { getCookie } from '../helpers/cookie.helper';
import { IClientInputs } from '../interfaces/entities/inputs/IClientInputs';

interface IHookReturn {
    inputs: IClientInputs;
    isFieldsDisabled: boolean;
    isShaken: boolean;
    isSnackbarOpened: boolean;
    onChangeHandler: (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    saveHandler: () => void;
    toggleFieldsDisability: () => void;
    handleClose: (_: React.SyntheticEvent | Event, reason?: string) => void;
}

export const useUpdateClientForm = (): IHookReturn => {
    const [isFieldsDisabled, setIsFieldsDisabled] = useState<boolean>(true);
    const [isShaken, setIsShaken] = useState<boolean>(false);
    const [isSnackbarOpened, setIsSnackbarOpened] = useState<boolean>(false);

    const [inputs, setInputs] = useState<IClientInputs>({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    });

    const {
        user: { client },
        updateClient,
        status,
    } = useUserStore(state => state);

    useEffect(() => {
        setInputs({
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            phoneNumber: client.phoneNumber,
        });
    }, [client]);

    const toggleFieldsDisability = () => {
        setIsFieldsDisabled(prev => !prev);
        setIsShaken(prev => !prev);
    };

    const onChangeHandler = ({
        target: { value, name },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInputs(prevState => ({ ...prevState, [name]: value }));
    };

    const saveHandler = async () => {
        const token = getCookie('token');

        const { firstName, lastName, phoneNumber } = inputs;

        const clientToUpdate: IClientUpdateRequest = {
            clientId: client.id,
            firstName,
            lastName,
            phoneNumber,
            token,
        };

        await updateClient(clientToUpdate);

        if (status === 'Success') {
            toggleFieldsDisability();
            setIsSnackbarOpened(true);
        }
    };

    const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setIsSnackbarOpened(false);
    };

    return {
        inputs,
        isFieldsDisabled,
        isShaken,
        isSnackbarOpened,
        onChangeHandler,
        saveHandler,
        handleClose,
        toggleFieldsDisability,
    };
};
