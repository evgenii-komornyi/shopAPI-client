import { Errors } from '../enums/Errors.enum';
import { ErrorPatterns } from '../types/ErrorPattern.type';

const emptyValueRegexExpression = /^$/;
const unicodeLetterPattern = '[\\p{L}\\p{M}]';

export const errorPatterns: ErrorPatterns = {
    email: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.EMAIL_WRONG_FORMAT,
    },
    password: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat:
            /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^*()_+\-=[\]{};:,.?])[A-Za-z\d!@#$%^*()_+\-=[\]{};:,.?]{8,100}$/,
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.EASY_PASSWORD_WRONG_FORMAT,
    },
    passwordConfirmation: {
        emptyValue: emptyValueRegexExpression,
        emptyValueError: Errors.EMPTY_FIELD,
        passwordsDoesNotMatches: Errors.PASSWORDS_DOES_NOT_MATCH,
    },
    firstName: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: new RegExp(`^${unicodeLetterPattern}+$`, 'u'),
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.ONLY_LETTERS,
    },
    lastName: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: new RegExp(`^${unicodeLetterPattern}+$`, 'u'),
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.ONLY_LETTERS,
    },
    phoneNumber: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: /^(?:\+|00)\d{8,15}$/,
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.PHONE_NUMBER_WRONG_FORMAT,
    },
    country: {
        emptyValue: emptyValueRegexExpression,
        emptyValueError: Errors.EMPTY_FIELD,
    },
    city: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: new RegExp(
            `^${unicodeLetterPattern}+(?:[\\s-]${unicodeLetterPattern}+)*$`,
            'u'
        ),
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.ONLY_LETTERS,
    },
    postalCode: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: [/^LV-\d{4}$/, /^[0-9]{5}$/, /^LT-\d{5}$/],
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.POSTAL_CODE_WRONG_FORMAT,
    },
    address: {
        emptyValue: emptyValueRegexExpression,
        wrongFormat: /^[\p{L}\p{N}.,\-:// ]+$/u,
        emptyValueError: Errors.EMPTY_FIELD,
        wrongFormatError: Errors.SPECIAL_CHARACTERS_NOT_ALLOWED,
    },
};
