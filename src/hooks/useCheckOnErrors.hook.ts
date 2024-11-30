import { useCallback, useState } from 'react';

import { errorPatterns } from '../data/checkoutErrorPatterns';

import { countryIndex } from '../helpers/validation.helper';

import { DeliveryType } from '../enums/DeliveryTypes.enum';

import { Errors } from '../enums/Errors.enum';
import { UserInputsValidationErrors } from '../types/UserInputsValidationErrors.type';
import { UserInputsValidation } from '../types/UserInputsValidation.type';
import { IFormField } from '../interfaces/IFormField.interface';
import { IValidationErrorState } from '../interfaces/checkout/error/IValidationErrorState.interface';
import { IValidationPattern } from '../interfaces/checkout/error/IValidationPattern.interface';
import { ICheckOnErrorsHookReturns } from '../interfaces/checkout/hook/ICheckOnErrorsHookReturns.interface';
import { IValidationState } from '../interfaces/checkout/error/IValidationState.interface';

export const useCheckOnErrors = (
    userInputs: IFormField,
    isCheckoutForm: boolean
): ICheckOnErrorsHookReturns => {
    const initialValidationErrorState: IValidationErrorState = {
        errors: [],
    };
    const [userInputsValidationErrors, setUserInputsValidationErrors] =
        useState<UserInputsValidationErrors>({
            email: initialValidationErrorState,
            password: initialValidationErrorState,
            passwordConfirmation: initialValidationErrorState,
            firstName: initialValidationErrorState,
            lastName: initialValidationErrorState,
            phoneNumber: initialValidationErrorState,
            country: initialValidationErrorState,
            city: initialValidationErrorState,
            postalCode: initialValidationErrorState,
            address: initialValidationErrorState,
        });

    const initialValidationState: IValidationState = {
        isValidated: false,
    };
    const [isUserInputsValidated, setIsUserInputsValidated] =
        useState<UserInputsValidation>({
            email: initialValidationState,
            password: initialValidationState,
            passwordConfirmation: initialValidationState,
            firstName: initialValidationState,
            lastName: initialValidationState,
            phoneNumber: initialValidationState,
            city: initialValidationState,
            postalCode: initialValidationState,
            address: initialValidationState,
        });

    const validateValue = useCallback(
        (value: string, pattern: IValidationPattern): Errors[] => {
            const country: string | undefined = userInputs.country;
            const password: string | undefined = userInputs.password;
            const passwordConfirmation: string | undefined =
                userInputs.passwordConfirmation;

            const regexPattern: RegExp | undefined = Array.isArray(
                pattern.wrongFormat
            )
                ? pattern.wrongFormat[countryIndex(country)]
                : pattern.wrongFormat;

            const errors: Errors[] = [];

            if (pattern.emptyValue.test(value)) {
                errors.push(pattern.emptyValueError);
            }

            if (
                pattern.passwordsDoesNotMatches &&
                password !== passwordConfirmation
            ) {
                errors.push(pattern.passwordsDoesNotMatches);
            }

            if (
                !pattern.emptyValue.test(value) &&
                regexPattern &&
                !regexPattern.test(value)
            ) {
                errors.push(pattern.wrongFormatError!);
            }

            return errors;
        },
        [
            userInputs.country,
            userInputs.password,
            userInputs.passwordConfirmation,
        ]
    );

    const checkFieldValueByName = useCallback(
        (fieldToCheck: string, valueToCheck: string): void => {
            if (
                fieldToCheck === 'deliveryType' ||
                fieldToCheck === 'deliveryComment' ||
                fieldToCheck === 'country' ||
                fieldToCheck === ' passwordConfirmation'
            ) {
                return;
            }

            const pattern: IValidationPattern = errorPatterns[fieldToCheck];

            if (!pattern) {
                console.warn(
                    `No validation pattern found for field: ${fieldToCheck}`
                );
                return;
            }

            const errors: Errors[] = validateValue(valueToCheck, pattern);
            const isValidated = errors.length === 0;

            setIsUserInputsValidated(prevState => ({
                ...prevState,
                [fieldToCheck]: { isValidated },
            }));

            setUserInputsValidationErrors(prevErrors => ({
                ...prevErrors,
                [fieldToCheck]: { errors },
            }));
        },
        [validateValue]
    );

    const isButtonDisabled = !Object.entries(isUserInputsValidated)
        .filter(([key]) => {
            if (!isCheckoutForm) {
                return true;
            } else if (
                isCheckoutForm &&
                userInputs.deliveryType === DeliveryType.COURIER
            ) {
                return !['password', 'passwordConfirmation'].includes(key);
            } else if (
                isCheckoutForm &&
                userInputs.deliveryType !== DeliveryType.COURIER
            ) {
                return ![
                    'city',
                    'postalCode',
                    'address',
                    'password',
                    'passwordConfirmation',
                ].includes(key);
            }
        })
        .every(([, validation]) => validation.isValidated);

    return {
        validationErrors: userInputsValidationErrors,
        isButtonDisabled,
        checkFieldValueByName,
    };
};
