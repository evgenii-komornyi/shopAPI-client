import {
    Alert,
    Collapse,
    IconButton,
    Snackbar,
    TextField,
} from '@mui/material';
import {
    EditButtonContainer,
    InputColumnGroup,
    InputGroup,
    Legend,
    PersonalInfoContainer,
    PersonalInfoFieldset,
    PersonalInfoHeaderContainer,
    SaveButton,
    SaveButtonContainer,
    ShakingInput,
} from './styles/PersonalInfo.styles';
import { EditNoteOutlined } from '@mui/icons-material';

import { AddressInfo } from './components/AddressInfo';
import { useUpdateClientForm } from '../../../../hooks/useUpdateClientForm.hook';

export const PersonalInfo = () => {
    const {
        toggleFieldsDisability,
        isFieldsDisabled,
        isShaken,
        isSnackbarOpened,
        inputs,
        onChangeHandler,
        saveHandler,
        handleClose,
    } = useUpdateClientForm();

    return (
        <PersonalInfoContainer>
            <EditButtonContainer>
                <IconButton onClick={toggleFieldsDisability}>
                    <EditNoteOutlined />
                </IconButton>
            </EditButtonContainer>
            <PersonalInfoHeaderContainer>
                <PersonalInfoFieldset>
                    <Legend>Personal info</Legend>
                    <InputGroup>
                        <ShakingInput
                            className={isShaken ? 'shake' : ''}
                            label="First name"
                            id="firstName"
                            name="firstName"
                            value={inputs.firstName}
                            placeholder="First name"
                            size="small"
                            variant="standard"
                            disabled={isFieldsDisabled}
                            onChange={onChangeHandler}
                        />
                        <ShakingInput
                            className={isShaken ? 'shake' : ''}
                            label="Last name"
                            id="lastName"
                            name="lastName"
                            value={inputs.lastName}
                            placeholder="Last name"
                            size="small"
                            variant="standard"
                            disabled={isFieldsDisabled}
                            onChange={onChangeHandler}
                        />
                    </InputGroup>
                    <InputColumnGroup>
                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            value={inputs.email}
                            placeholder="Email"
                            size="small"
                            variant="standard"
                            disabled={true}
                        />
                        <ShakingInput
                            className={isShaken ? 'shake' : ''}
                            sx={{ mt: 2 }}
                            label="Phone number"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={inputs.phoneNumber}
                            placeholder="Phone number"
                            size="small"
                            variant="standard"
                            disabled={isFieldsDisabled}
                            onChange={onChangeHandler}
                        />
                    </InputColumnGroup>
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
                </PersonalInfoFieldset>
            </PersonalInfoHeaderContainer>
            <AddressInfo />
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
        </PersonalInfoContainer>
    );
};
