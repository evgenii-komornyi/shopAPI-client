import { Errors } from '../../../enums/Errors.enum';

export interface IValidationPattern {
    emptyValue: RegExp;
    wrongFormat?: RegExp | RegExp[];
    emptyValueError: Errors;
    wrongFormatError?: Errors;
    passwordsDoesNotMatches?: Errors;
}
