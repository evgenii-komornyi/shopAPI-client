import { memo } from 'react';

import { TextInput } from '../TextInput';
import { SelectInput } from '../SelectInput';
import { RadioInput } from '../RadioInput';

import { IFormInputProps } from '../../../../../../interfaces/checkout/IFormInputProps.interface';
import { IControlProps } from '../../../../../../interfaces/checkout/IControlProps.interface';

interface IProps extends IFormInputProps {
    controlProps: (item: string) => IControlProps;
}

const Input = ({
    formId,
    field,
    values,
    errors,
    onChangeHandler,
    onBlurHandler,
    controlProps,
}: IProps) => {
    const renderInputByType = () => {
        if (
            field.type === 'text' ||
            field.type === 'email' ||
            field.type === 'number'
        ) {
            return (
                <TextInput
                    formId={formId}
                    field={field}
                    values={values}
                    errors={errors}
                    onChangeHandler={onChangeHandler}
                    onBlurHandler={onBlurHandler}
                />
            );
        } else if (field.type === 'select') {
            return (
                <SelectInput
                    formId={formId}
                    field={field}
                    values={values}
                    errors={errors}
                    onChangeHandler={onChangeHandler}
                    onBlurHandler={onBlurHandler}
                />
            );
        } else if (field.type === 'radio') {
            return <RadioInput field={field} controlProps={controlProps} />;
        }
    };

    return renderInputByType();
};

export const ConditionalInput = memo(Input);
