import {
    Box,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    Typography,
} from '@mui/material';
import {
    FieldSet,
    FieldSetContainer,
    Input,
    InputGroupContainer,
    Legend,
    LoginButton,
} from './styles/LoginForm.styles';
import { formData } from '../../../../../../data/form-data';
import { Fragment } from 'react/jsx-runtime';
import { IField } from '../../../../../../interfaces/checkout/IField.interface';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { IUserLoginRequest } from '../../../../../../interfaces/entities/requests/user/IUserLoginRequest';
import useAuthStore from '../../../../../../stores/useAuth.store';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../../../../stores/useUser.store';
import useCartStore from '../../../../../../stores/useCart.store';
import { ErrorSnackbar } from '../../../../../ErrorSnackbar';

export const LoginForm = () => {
    const [userInputs, setUserInputs] = useState<IUserLoginRequest>({
        email: '',
        password: '',
        isRememberMeChecked: false,
    });

    const { user, login, validationErrors, databaseErrors } = useAuthStore(
        state => state
    );
    const { setUserIdOnAuth } = useUserStore();
    const { cart, createCartByUserId } = useCartStore(state => state);
    const navigate = useNavigate();

    useEffect(() => {
        if (user.id !== 0) {
            navigate('/');
            setUserIdOnAuth(user.id);

            if (!Object.prototype.hasOwnProperty.call(cart, user.id)) {
                createCartByUserId(user.id);
            }
        }
    }, [user.id, navigate, setUserIdOnAuth, cart, createCartByUserId]);

    const handleKeyDown = ({ key }: KeyboardEvent<HTMLDivElement>): void => {
        if (key === 'Enter') {
            login(userInputs);
        }
    };

    const loginUser = (): void => {
        login(userInputs);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = event.target;

        if (name !== 'rememberMe') {
            setUserInputs(prev => ({ ...prev, [name]: value }));
        } else {
            setUserInputs(prev => ({ ...prev, isRememberMeChecked: checked }));
        }
    };

    const renderInputByType = (type: string, field: IField) => {
        if (type === 'email' || type === 'password') {
            return (
                <FormControl fullWidth={field.isFullWidth}>
                    <Input
                        id={field.id}
                        name={field.name}
                        label={field.label}
                        type={field.type}
                        value={
                            userInputs[field.name as keyof IUserLoginRequest]
                        }
                        placeholder={field.placeholder}
                        inputProps={{
                            maxLength: field.maxLength,
                        }}
                        size="medium"
                        variant="outlined"
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                </FormControl>
            );
        } else if (type === 'checkbox') {
            return (
                <FormControl sx={{ alignItems: 'center' }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                id={field.id}
                                name={field.name}
                                inputProps={{
                                    maxLength: field.maxLength,
                                    'aria-label': 'remember me checkbox',
                                }}
                                checked={userInputs.isRememberMeChecked}
                                onChange={handleChange}
                                color={
                                    userInputs.isRememberMeChecked
                                        ? 'success'
                                        : 'default'
                                }
                                size="medium"
                            />
                        }
                        label={field.label}
                    />
                </FormControl>
            );
        }
    };

    return (
        <Container>
            <FieldSetContainer>
                {formData.login.map(({ id, title, fields }, index) => (
                    <FieldSet key={`${id}-${index}`}>
                        <Legend>{title}</Legend>
                        <>
                            {fields.map((field, fieldIndex) => (
                                <Fragment key={`${field.id}-${fieldIndex}`}>
                                    {renderInputByType(field.type, field)}
                                </Fragment>
                            ))}
                        </>
                    </FieldSet>
                ))}
            </FieldSetContainer>
            <InputGroupContainer>
                <LoginButton onClick={loginUser}>Login</LoginButton>
            </InputGroupContainer>
            {validationErrors.length !== 0 && (
                <ErrorSnackbar errors={validationErrors} />
            )}
            {databaseErrors.length !== 0 && (
                <ErrorSnackbar errors={databaseErrors} />
            )}
        </Container>
    );
};
