import { EditNoteOutlined } from '@mui/icons-material';
import {
    EditButtonContainer,
    SaveButton,
    SaveButtonContainer,
    ShakingInput,
} from '../../styles/PersonalInfo.styles';
import {
    AddressInfoContainer,
    AddressInfoFieldset,
    AddressInfoHeaderContainer,
    InputGroup,
    Legend,
} from './styles/AddressInfo.styles';
import {
    Alert,
    Collapse,
    IconButton,
    Snackbar,
    TextField,
} from '@mui/material';
import { useUpdateAddressForm } from '../../../../../../hooks/useUpdateAddressForm.hook';
import { useMemo } from 'react';

export const AddressInfo = () => {
    const {
        toggleFieldsDisability,
        isFieldsDisabled,
        isShaken,
        isSnackbarOpened,
        inputs,
        onChangeHandler,
        saveHandler,
        handleClose,
    } = useUpdateAddressForm();

    const memoSnackbar = useMemo(() => {
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isSnackbarOpened}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Changes successfully saved!
                </Alert>
            </Snackbar>
        );
    }, [handleClose, isSnackbarOpened]);

    return (
        <AddressInfoContainer>
            <EditButtonContainer>
                <IconButton onClick={toggleFieldsDisability}>
                    <EditNoteOutlined />
                </IconButton>
            </EditButtonContainer>
            <AddressInfoHeaderContainer>
                <AddressInfoFieldset>
                    <Legend>Address info</Legend>
                    <InputGroup>
                        <TextField
                            label="Country"
                            id="country"
                            name="country"
                            value={inputs.country}
                            placeholder="Country"
                            size="small"
                            variant="standard"
                            disabled={true}
                        />
                        <TextField
                            label="City"
                            id="city"
                            name="city"
                            value={inputs.city}
                            placeholder="City"
                            size="small"
                            variant="standard"
                            disabled={true}
                        />
                    </InputGroup>
                    <InputGroup>
                        <TextField
                            label="Postal code"
                            id="postalCode"
                            name="postalCode"
                            value={inputs.postalCode}
                            placeholder="Postal code"
                            size="small"
                            variant="standard"
                            disabled={true}
                        />
                        <ShakingInput
                            className={isShaken ? 'shake' : ''}
                            label="Address"
                            id="address"
                            name="address"
                            value={inputs.address}
                            placeholder="Address"
                            size="small"
                            variant="standard"
                            disabled={isFieldsDisabled}
                            onChange={onChangeHandler}
                        />
                    </InputGroup>
                    <Collapse in={!isFieldsDisabled}>
                        <SaveButtonContainer>
                            <SaveButton
                                variant="outlined"
                                onClick={saveHandler}
                            >
                                Save
                            </SaveButton>
                        </SaveButtonContainer>
                    </Collapse>
                </AddressInfoFieldset>
            </AddressInfoHeaderContainer>
            {memoSnackbar}
        </AddressInfoContainer>
    );
};
