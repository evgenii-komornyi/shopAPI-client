import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

import { IField } from './IField.interface';
import { FormIds } from '../../enums/FormIds.enum';
import { UserInputsValidationErrors } from '../../types/UserInputsValidationErrors.type';
import { IFormField } from '../IFormField.interface';
import { IPasswordTypeVisibility } from '../IPasswordTypeVisibility.interface';

export interface IFormInputProps {
    formId: FormIds;
    field: IField;
    fieldType?: IPasswordTypeVisibility;
    values: IFormField;
    errors: UserInputsValidationErrors;
    onChangeHandler: (
        event:
            | SelectChangeEvent<HTMLInputElement | string>
            | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    onBlurHandler: (fieldName: string, fieldValue: string) => void;
    handleChangeFieldType?: (field: string) => void;
    checkType?: (name: string, type: string) => string;
    handleMouseDownPassword?: (
        event: React.MouseEvent<HTMLButtonElement>
    ) => void;
}
