import { FormIds } from '../enums/FormIds.enum';
import { IField } from '../interfaces/checkout/IField.interface';
import { IOption } from '../interfaces/checkout/field-options/IOption.interface';
import { countries } from './countries';
import { deliveryTypeOptions } from './deliveryTypeOptions';

interface IFormData {
    checkout: IForm[];
    registration: IForm[];
    login: IForm[];
}

interface IForm {
    id: FormIds;
    title: string;
    fields: IField[];
}

export const formData: IFormData = {
    checkout: [
        {
            id: FormIds.CLIENT_INFO,
            title: 'Contacts',
            fields: [
                {
                    id: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'johndoe@gmail.com',
                    maxLength: 100,
                    type: 'email',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'firstName',
                    name: 'firstName',
                    label: 'First name',
                    placeholder: 'John',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'lastName',
                    name: 'lastName',
                    label: 'Last name',
                    placeholder: 'Doe',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'phoneNumber',
                    name: 'phoneNumber',
                    label: 'Phone number',
                    placeholder:
                        '+37100000000 (mobile), or 0037100000000 (home)',
                    maxLength: 15,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
            ],
        },
        {
            id: FormIds.DELIVERY_TYPE,
            title: 'Delivery type',
            fields: [
                {
                    id: 'deliveryType',
                    name: 'deliveryType',
                    label: 'Delivery type',
                    maxLength: 100,
                    type: 'radio',
                    isRequired: false,
                    isFullWidth: false,
                    options: deliveryTypeOptions as IOption[],
                },
            ],
        },
        {
            id: FormIds.DELIVERY_INFO,
            title: 'Delivery',
            fields: [
                {
                    id: 'country',
                    name: 'country',
                    label: 'Country',
                    maxLength: 100,
                    type: 'select',
                    isRequired: true,
                    isFullWidth: true,
                    options: countries as IOption[],
                },
                {
                    id: 'city',
                    name: 'city',
                    label: 'City',
                    placeholder: 'Riga',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'postalCode',
                    name: 'postalCode',
                    label: 'Postal code',
                    type: 'text',
                    placeholder: 'LV-1000',
                    maxLength: 10,
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'address',
                    name: 'address',
                    label: 'Address',
                    placeholder: 'Testy pr. 20-25',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'comment',
                    name: 'deliveryComment',
                    label: 'Comment',
                    placeholder: 'Non-contact delivery. Leave and run away.',
                    maxLength: 100,
                    type: 'text',
                    isRequired: false,
                    isFullWidth: true,
                },
            ],
        },
    ],
    registration: [
        {
            id: FormIds.USER_INFO,
            title: 'User Info',
            fields: [
                {
                    id: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'johndoe@gmail.com',
                    maxLength: 100,
                    type: 'email',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Strong password',
                    maxLength: 100,
                    type: 'password',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'passwordConfirmation',
                    name: 'passwordConfirmation',
                    label: 'Password Confirmation',
                    placeholder: 'Repeat password',
                    maxLength: 100,
                    type: 'password',
                    isRequired: true,
                    isFullWidth: true,
                },
            ],
        },
        {
            id: FormIds.PERSONAL_INFO,
            title: 'Personal Info',
            fields: [
                {
                    id: 'firstName',
                    name: 'firstName',
                    label: 'First name',
                    placeholder: 'John',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'lastName',
                    name: 'lastName',
                    label: 'Last name',
                    placeholder: 'Doe',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'phoneNumber',
                    name: 'phoneNumber',
                    label: 'Phone number',
                    placeholder:
                        '+37100000000 (mobile), or 0037100000000 (home)',
                    maxLength: 15,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
            ],
        },
        {
            id: FormIds.ADDRESS,
            title: 'Address',
            fields: [
                {
                    id: 'country',
                    name: 'country',
                    label: 'Country',
                    maxLength: 100,
                    type: 'select',
                    isRequired: true,
                    isFullWidth: true,
                    options: countries as IOption[],
                },
                {
                    id: 'city',
                    name: 'city',
                    label: 'City',
                    placeholder: 'Riga',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'postalCode',
                    name: 'postalCode',
                    label: 'Postal code',
                    type: 'text',
                    placeholder: 'LV-1000',
                    maxLength: 10,
                    isRequired: true,
                    isFullWidth: true,
                },
                {
                    id: 'address',
                    name: 'address',
                    label: 'Address',
                    placeholder: 'Testy pr. 20-25',
                    maxLength: 100,
                    type: 'text',
                    isRequired: true,
                    isFullWidth: true,
                },
            ],
        },
    ],
    login: [
        {
            id: FormIds.LOGIN_INFO,
            title: 'Login Info',
            fields: [
                {
                    id: 'email',
                    name: 'email',
                    label: 'Email',
                    placeholder: 'johndoe@gmail.com',
                    maxLength: 100,
                    type: 'email',
                    isRequired: false,
                    isFullWidth: true,
                },
                {
                    id: 'password',
                    name: 'password',
                    label: 'Password',
                    placeholder: 'Strong password',
                    maxLength: 100,
                    type: 'password',
                    isRequired: false,
                    isFullWidth: true,
                },
                {
                    id: 'rememberMe',
                    name: 'rememberMe',
                    label: 'Remember me',
                    placeholder: 'Remember me',
                    maxLength: 1,
                    type: 'checkbox',
                    isRequired: false,
                    isFullWidth: true,
                },
            ],
        },
    ],
};
