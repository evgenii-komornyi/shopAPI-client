import { memo, useEffect, useRef } from 'react';
import { FormControl, IconButton, InputAdornment } from '@mui/material';

import { Input } from '../styles/Form.styles';

import {
    ICountryPlaceholders,
    IPlaceholders,
    placeholders,
} from '../../../data/placeholders';

import { FormIds } from '../../../enums/FormIds.enum';
import { DeliveryType } from '../../../enums/DeliveryTypes.enum';

import { IFormInputProps } from '../../../interfaces/checkout/IFormInputProps.interface';
import { IFormField } from '../../../interfaces/IFormField.interface';
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';

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
    fieldType,
    values,
    errors,
    onChangeHandler,
    onBlurHandler,
    handleChangeFieldType,
    checkType,
    handleMouseDownPassword,
}: IFormInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onBlur = (): void => {
        onBlurHandler(name, values[name as keyof IFormField]);
    };

    const placeholderByCountry = (
        name: string,
        values: IFormField,
        placeholder?: string
    ): string => {
        if (
            name in placeholders &&
            values.country &&
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
    }, [name]);

    const renderInput = () => (
        <FormControl fullWidth={isFullWidth}>
            <Input
                id={id}
                name={name}
                label={label}
                value={values[name as keyof IFormField]}
                type={checkType ? checkType(name, type) : type}
                placeholder={placeholderByCountry(name, values, placeholder)}
                inputProps={{ maxLength }}
                error={isRequired && errors[name]?.errors?.length !== 0}
                helperText={errors[name]?.errors[0]}
                required={isRequired}
                onChange={onChangeHandler}
                onBlur={onBlur}
                $isPersonalInfo={formId === FormIds.PERSONAL_INFO}
                $isAddressInfo={formId === FormIds.ADDRESS}
                size={`${formId === FormIds.PERSONAL_INFO ? 'medium' : 'small'}`}
                variant="outlined"
                inputRef={inputRef}
                InputProps={
                    name === 'password' || name === 'passwordConfirmation'
                        ? {
                              endAdornment: (
                                  <InputAdornment position="end">
                                      <IconButton
                                          aria-label={`toggle ${label.toLowerCase()} visibility`}
                                          onClick={() =>
                                              handleChangeFieldType &&
                                              handleChangeFieldType(name)
                                          }
                                          onMouseDown={handleMouseDownPassword}
                                          edge="end"
                                      >
                                          {fieldType?.[name] ? (
                                              <VisibilityOffOutlined />
                                          ) : (
                                              <VisibilityOutlined />
                                          )}
                                      </IconButton>
                                  </InputAdornment>
                              ),
                          }
                        : undefined
                }
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
