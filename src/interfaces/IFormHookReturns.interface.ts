import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, MouseEvent } from 'react';

import { UserInputsValidationErrors } from '../types/UserInputsValidationErrors.type';

import { IFormField } from './IFormField.interface';
import { IPasswordTypeVisibility } from './IPasswordTypeVisibility.interface';
import { IControlProps } from './checkout/IControlProps.interface';

export interface IFormHookReturns {
    userInputs: IFormField;
    fieldType: IPasswordTypeVisibility;
    validationErrors: UserInputsValidationErrors;
    isButtonDisabled: boolean;
    handleChangeFieldType: (field: string) => void;
    checkType: (name: string, type: string) => string;
    handleMouseDownPassword: (event: MouseEvent<HTMLButtonElement>) => void;
    onChangeHandler: (
        event:
            | SelectChangeEvent<HTMLInputElement | string>
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlurHandler: (fieldName: string, fieldValue: string) => void;
    register: () => void;
    buy: () => Promise<void>;
    controlProps: (item: string) => IControlProps;
}
