import { memo, useEffect, useRef } from 'react';
import { FormControl } from '@mui/material';

import { Input } from '../../../../styles/CheckoutForm.styles';

import {
    ICountryPlaceholders,
    IPlaceholders,
    placeholders,
} from '../../../../../../data/placeholders';

import { FormIds } from '../../../../../../enums/FormIds.enum';
import { DeliveryType } from '../../../../../../enums/DeliveryTypes.enum';

import { IFormInputProps } from '../../../../../../interfaces/checkout/IFormInputProps.interface';
import { ICheckoutField } from '../../../../../../interfaces/checkout/ICheckoutField.interface';

const InputText = ({
    formId,
    field: {
        id,
        name,
        maxLength,
        placeholder,
        type,
        label,
        isFullWidth,
        isRequired,
    },
    values,
    errors,
    onChangeHandler,
    onBlurHandler,
}: IFormInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onBlur = (): void => {
        onBlurHandler(name, values[name as keyof ICheckoutField]);
    };

    const placeholderByCountry = (
        name: string,
        values: ICheckoutField,
        placeholder?: string
    ): string => {
        if (
            name in placeholders &&
            values.country in placeholders[name as keyof IPlaceholders]
        ) {
            return placeholders[name as keyof IPlaceholders][
                values.country as keyof ICountryPlaceholders
            ];
        }

        return placeholder ?? '';
    };

    useEffect(() => {
        if (inputRef.current) {
            const input = inputRef.current;
            const handleInputChange = () => {
                if (input.value) {
                    onBlurHandler(name, input.value);
                }
            };

            const observer = new MutationObserver(handleInputChange);
            observer.observe(input, {
                attributes: true,
                attributeFilter: ['value'],
            });

            if (input.value) {
                handleInputChange();
            }

            return () => {
                observer.disconnect();
            };
        }
    }, [name, onBlurHandler]);

    const renderInput = () => (
        <FormControl fullWidth={isFullWidth}>
            <Input
                id={id}
                name={name}
                label={label}
                value={values[name as keyof ICheckoutField]}
                type={type}
                placeholder={placeholderByCountry(name, values, placeholder)}
                inputProps={{ maxLength }}
                error={isRequired && errors[name]?.errors?.length !== 0}
                helperText={errors[name]?.errors[0]}
                required={isRequired}
                onChange={onChangeHandler}
                onBlur={onBlur}
                size="small"
                variant="outlined"
                inputRef={inputRef}
            />
        </FormControl>
    );

    return formId === FormIds.DELIVERY_INFO
        ? values.deliveryType === DeliveryType.COURIER
            ? renderInput()
            : null
        : renderInput();
};

export const TextInput = memo(InputText);
