import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent } from 'react';

import { UserInputsValidationErrors } from '../../../types/UserInputsValidationErrors.type';

import { ICheckoutField } from '../ICheckoutField.interface';
import { IControlProps } from '../IControlProps.interface';

export interface ICheckoutHookReturns {
    userInputs: ICheckoutField;
    validationErrors: UserInputsValidationErrors;
    isButtonDisabled: boolean;
    buy: () => Promise<void>;
    controlProps: (item: string) => IControlProps;
    onChangeHandler: (
        event:
            | SelectChangeEvent<HTMLInputElement | string>
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlurHandler: (fieldName: string, fieldValue: string) => void;
}
