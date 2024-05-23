import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { IField } from './IField.interface';
import { ICheckoutField } from './ICheckoutField.interface';
import { FormIds } from '../../enums/FormIds.enum';
import { UserInputsValidationErrors } from '../../types/UserInputsValidationErrors.type';

export interface IFormInputProps {
    formId: FormIds;
    field: IField;
    values: ICheckoutField;
    errors: UserInputsValidationErrors;
    onChangeHandler: (
        event:
            | SelectChangeEvent<HTMLInputElement | string>
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlurHandler: (fieldName: string, fieldValue: string) => void;
}
