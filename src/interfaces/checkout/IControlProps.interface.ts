import { ChangeEvent } from 'react';

export interface IControlProps {
    checked: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
    inputProps: {
        'aria-label': string;
    };
}
