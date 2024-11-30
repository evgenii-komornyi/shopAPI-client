import { useForm } from '../../../../../../hooks/useForm.hook';

import { formData } from '../../../../../../data/form-data';

import {
    FieldSet,
    Container,
    InputGroupContainer,
    Legend,
    RegisterButton,
    FieldSetContainer,
} from './styles/RegisterForm.styles';
import { Fragment } from 'react/jsx-runtime';
import { ConditionalInput } from '../../../../../Form/ConditionalInput/ConditionalInput';

export const RegisterForm = () => {
    const {
        userInputs,
        validationErrors,
        fieldType,
        register,
        handleMouseDownPassword,
        handleChangeFieldType,
        checkType,
        onBlurHandler,
        isButtonDisabled,
        onChangeHandler,
    } = useForm(formData.registration.some(item => item.title === 'Delivery'));

    return (
        <Container>
            <FieldSetContainer>
                {formData.registration.map(({ id, title, fields }, index) => (
                    <FieldSet
                        key={`${id}-${index}`}
                        $isUserInfo={index === 0}
                        $isAddress={index === 2}
                    >
                        <Legend>{title}</Legend>
                        <>
                            {fields.map((field, fieldIndex) => (
                                <Fragment key={`${field.id}-${fieldIndex}`}>
                                    <ConditionalInput
                                        formId={id}
                                        field={field}
                                        fieldType={fieldType}
                                        values={userInputs}
                                        errors={validationErrors}
                                        onChangeHandler={onChangeHandler}
                                        onBlurHandler={onBlurHandler}
                                        handleChangeFieldType={
                                            handleChangeFieldType
                                        }
                                        checkType={checkType}
                                        handleMouseDownPassword={
                                            handleMouseDownPassword
                                        }
                                    />
                                </Fragment>
                            ))}
                        </>
                    </FieldSet>
                ))}
            </FieldSetContainer>
            <InputGroupContainer>
                <RegisterButton disabled={isButtonDisabled} onClick={register}>
                    Register
                </RegisterButton>
            </InputGroupContainer>
        </Container>
    );
};
