import { UserInputsValidationErrors } from '../../../types/UserInputsValidationErrors.type';

export interface ICheckOnErrorsHookReturns {
    validationErrors: UserInputsValidationErrors;
    isButtonDisabled: boolean;
    checkFieldValueByName: (fieldToCheck: string, valueToCheck: string) => void;
}
