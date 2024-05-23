import { IOption } from './field-options/IOption.interface';

export interface IField {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    type: string;
    maxLength: number;
    isRequired: boolean;
    isFullWidth: boolean;
    options?: IOption[];
}
