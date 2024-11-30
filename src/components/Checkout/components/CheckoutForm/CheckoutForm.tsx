import { Fragment } from 'react';
import { Box, Typography } from '@mui/material';

import { formData } from '../../../../data/form-data';

import { DeliveryType } from '../../../../enums/DeliveryTypes.enum';

import {
    FormContainer,
    InputGroupContainer,
    BuyButton,
} from '../../../Form/styles/Form.styles';

import { ConditionalInput } from '../../../Form/ConditionalInput/ConditionalInput';
import { useForm } from '../../../../hooks/useForm.hook';

export const CheckoutForm = () => {
    const {
        userInputs,
        validationErrors,
        buy,
        controlProps,
        onChangeHandler,
        onBlurHandler,
        isButtonDisabled,
    } = useForm(formData.checkout.some(item => item.title === 'Delivery'));

    return (
        <FormContainer>
            {formData.checkout.map(({ id, title, fields }, index) => (
                <InputGroupContainer key={index}>
                    <Typography variant="h5">{title}</Typography>
                    <Box
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '90%',

                            '& > :not(style)': { m: 1 },
                        }}
                        autoComplete="on"
                    >
                        {fields.map((field, index) => (
                            <Fragment key={`${field.id}-${index}`}>
                                <ConditionalInput
                                    formId={id}
                                    field={field}
                                    values={userInputs}
                                    errors={validationErrors}
                                    onChangeHandler={onChangeHandler}
                                    onBlurHandler={onBlurHandler}
                                    controlProps={controlProps}
                                />
                            </Fragment>
                        ))}
                    </Box>
                </InputGroupContainer>
            ))}
            {userInputs.deliveryType !== DeliveryType.COURIER ? (
                <InputGroupContainer>
                    <Typography variant="h5">
                        Latvia, Riga, Brivibas street, 5
                    </Typography>
                </InputGroupContainer>
            ) : null}
            <InputGroupContainer>
                <BuyButton disabled={isButtonDisabled} onClick={buy}>
                    Buy
                </BuyButton>
            </InputGroupContainer>
        </FormContainer>
    );
};
