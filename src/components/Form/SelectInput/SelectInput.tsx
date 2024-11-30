import { ReactElement, memo } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { ICheckoutField } from '../../../interfaces/checkout/ICheckoutField.interface';
import { IFormInputProps } from '../../../interfaces/checkout/IFormInputProps.interface';
import { DeliveryType } from '../../../enums/DeliveryTypes.enum';
import { FormIds } from '../../../enums/FormIds.enum';
import { ICountryOptions } from '../../../interfaces/checkout/field-options/ICountryOptions.interface';

interface IOptions<T> {
    components: (field: T, index: number) => ReactElement;
}

/**
 * When you add a new field in formData file, which contains own options,
 * You have to add a field name as a key into IOptionsByField interface
 * to describe component, which need to render for this options.
 **/

interface IOptionsByFieldName {
    country: IOptions<ICountryOptions>;
}

const optionsByFieldName: IOptionsByFieldName = {
    country: {
        components: (field: ICountryOptions, index: number) => (
            <MenuItem key={index} value={field.label}>
                <img
                    style={{
                        margin: '0 10px',
                    }}
                    loading="lazy"
                    width="20"
                    srcSet={`https://flagcdn.com/w40/${field.code?.toLowerCase()}.png 2x`}
                    src={`https://flagcdn.com/w20/${field.code?.toLowerCase()}.png`}
                    alt=""
                />
                {`(${field.code}) ${field.label}`}
            </MenuItem>
        ),
    },
};

const Input = ({
    formId,
    field: { id, name, label, maxLength, isFullWidth, isRequired, options },
    values,
    onChangeHandler,
    onBlurHandler,
}: IFormInputProps) => {
    const renderInput = () => {
        const fieldOptions =
            optionsByFieldName[name as keyof IOptionsByFieldName];

        return (
            <Box
                sx={{
                    width: '100%',
                    pr: 1,
                    pl: 1,
                    mt: formId === FormIds.PERSONAL_INFO ? 2 : 0,
                }}
            >
                <FormControl
                    fullWidth={isFullWidth}
                    size={formId === FormIds.PERSONAL_INFO ? 'small' : 'medium'}
                >
                    <InputLabel id={`${label}-label`}>{label}*</InputLabel>
                    <Select
                        labelId={`${label}-label`}
                        required={isRequired}
                        id={id}
                        value={values[name as keyof ICheckoutField]}
                        name={name}
                        label={label}
                        inputProps={{ maxLength }}
                        onChange={onChangeHandler}
                        onBlur={() =>
                            onBlurHandler(
                                name,
                                values[name as keyof ICheckoutField]
                            )
                        }
                    >
                        {options?.map((field, index) =>
                            fieldOptions.components(field, index)
                        )}
                    </Select>
                </FormControl>
            </Box>
        );
    };

    return formId === FormIds.DELIVERY_INFO
        ? values.deliveryType === DeliveryType.COURIER
            ? renderInput()
            : null
        : renderInput();
};

export const SelectInput = memo(Input);
