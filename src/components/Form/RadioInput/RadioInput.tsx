import { memo } from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';

import { IControlProps } from '../../../interfaces/checkout/IControlProps.interface';
import { IField } from '../../../interfaces/checkout/IField.interface';

interface IProps {
    field: IField;
    controlProps: (item: string) => IControlProps;
}

const Input = ({ field, controlProps }: IProps) => {
    return (
        <Box
            sx={{
                width: '100%',
                pr: 1,
                pl: 1,
            }}
        >
            <FormControl fullWidth>
                <RadioGroup row>
                    {field.options !== undefined &&
                        field.options.length > 0 &&
                        field.options?.map(({ value, label, color }, index) => (
                            <FormControlLabel
                                key={index}
                                control={<Radio {...controlProps(value)} />}
                                label={label}
                                color={color}
                            />
                        ))}
                </RadioGroup>
            </FormControl>
        </Box>
    );
};

export const RadioInput = memo(Input);
