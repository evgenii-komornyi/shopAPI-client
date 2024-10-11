import { ChangeEvent, useEffect, useState } from 'react';
import useUserStore from '../stores/useUser.store';
import { getCookie } from '../helpers/cookie.helper';
import { IAddressInputs } from '../interfaces/entities/inputs/IAddressInputs';
import { IAddressUpdateRequest } from '../interfaces/entities/requests/address/IAddressUpdateRequest';

interface IHookReturn {
    inputs: IAddressInputs;
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

export const useUpdateAddressForm = (): IHookReturn => {
    const [isFieldsDisabled, setIsFieldsDisabled] = useState<boolean>(true);
    const [isShaken, setIsShaken] = useState<boolean>(false);
    const [isSnackbarOpened, setIsSnackbarOpened] = useState<boolean>(false);

    const [inputs, setInputs] = useState<IAddressInputs>({
        country: '',
        city: '',
        postalCode: '',
        address: '',
    });

    const {
        user: {
            client: { address },
        },
        status,
        updateAddress,
    } = useUserStore(state => state);

    useEffect(() => {
        if (address) {
            setInputs({
                country: address.country,
                city: address.city,
                postalCode: address.postalCode,
                address: address.address,
            });
        }
    }, [address]);

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

        const { address: addressValue } = inputs;

        const addressToUpdate: IAddressUpdateRequest = {
            addressId: address.id,
            address: addressValue,
            token,
        };

        await updateAddress(addressToUpdate);

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
