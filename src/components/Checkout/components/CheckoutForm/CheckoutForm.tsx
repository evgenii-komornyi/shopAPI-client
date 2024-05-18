import { Fragment } from 'react';
import {
    Box,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    Typography,
} from '@mui/material';

import { countries } from '../../../../data/countries';
import { formData } from '../../../../data/form-data';

import { useCheckout } from '../../../../hooks/useCheckout.hook';

import { DeliveryType } from '../../../../enums/deliveryTypes.enum';
import { IClient } from '../../../../interfaces/order/IClient.interface';
import { IAddress } from '../../../../interfaces/order/IAddress.interface';
import { IDeliveryInfo } from '../../../../interfaces/order/IDeliveryInfo.interface';

interface IState extends IClient, IAddress, IDeliveryInfo {}

import {
    FormContainer,
    Input,
    InputGroupContainer,
    BuyButton,
} from '../../styles/CheckoutForm.styles';

export const CheckoutForm = () => {
    const { fields, buy, controlProps, onChangeHandler, isButtonDisabled } =
        useCheckout();

    return (
        <FormContainer>
            <InputGroupContainer>
                <Typography variant="h5">{formData[0].title}</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                >
                    {formData[0].fields.map(
                        (
                            { id, name, isRequired, isFullWidth, label },
                            index
                        ) => (
                            <Fragment key={index}>
                                <Input
                                    id={id}
                                    name={name}
                                    label={label}
                                    value={fields[name as keyof IState]}
                                    fullWidth={isFullWidth}
                                    required={isRequired}
                                    onChange={onChangeHandler}
                                    size="small"
                                    variant="outlined"
                                    autoComplete="off"
                                />
                            </Fragment>
                        )
                    )}
                </Box>
            </InputGroupContainer>
            <InputGroupContainer>
                <Typography variant="h5">Delivery type</Typography>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                >
                    <FormControl fullWidth>
                        <RadioGroup row>
                            <FormControlLabel
                                control={
                                    <Radio
                                        {...controlProps(DeliveryType.courier)}
                                    />
                                }
                                label="Courier delivery"
                                color="default"
                            />
                            <FormControlLabel
                                control={
                                    <Radio
                                        {...controlProps(DeliveryType.shop)}
                                    />
                                }
                                label="Pick up from the shop"
                                color="default"
                            />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </InputGroupContainer>

            {fields.deliveryType === DeliveryType.courier ? (
                <InputGroupContainer>
                    <Typography variant="h5">{formData[1].title}</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '97%' },
                        }}
                        noValidate
                    >
                        <FormControl fullWidth>
                            <InputLabel id="country-label">Country</InputLabel>
                            <Select
                                labelId="country-label"
                                required
                                id="country"
                                value={fields.country}
                                name="country"
                                label="Country"
                                onChange={onChangeHandler}
                            >
                                {countries.map(
                                    ({ countryLabel, code }, index) => (
                                        <MenuItem
                                            key={index}
                                            value={countryLabel}
                                        >
                                            <img
                                                style={{ marginLeft: '10px' }}
                                                loading="lazy"
                                                width="20"
                                                srcSet={`https://flagcdn.com/w40/${code.toLowerCase()}.png 2x`}
                                                src={`https://flagcdn.com/w20/${code.toLowerCase()}.png`}
                                                alt=""
                                            />
                                            {`(${code}) ${countryLabel}`}
                                        </MenuItem>
                                    )
                                )}
                            </Select>
                        </FormControl>
                        <FormControl
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Input
                                id="city"
                                name="city"
                                required
                                label="City"
                                size="small"
                                variant="outlined"
                                onChange={onChangeHandler}
                                autoComplete="off"
                                sx={{ width: '50%', mr: 1 }}
                            />
                            <Input
                                id="postalCode"
                                name="postalCode"
                                required
                                label="Postal code"
                                size="small"
                                variant="outlined"
                                onChange={onChangeHandler}
                                autoComplete="off"
                                sx={{ width: '50%', ml: 1 }}
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                id="address"
                                name="address"
                                required
                                label="Address"
                                size="small"
                                variant="outlined"
                                onChange={onChangeHandler}
                                autoComplete="off"
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                id="comment"
                                name="deliveryComment"
                                label="Comment"
                                size="small"
                                variant="outlined"
                                onChange={onChangeHandler}
                            />
                        </FormControl>
                    </Box>
                </InputGroupContainer>
            ) : (
                <InputGroupContainer>
                    <Typography variant="h5">
                        Latvia, Riga, Brivibas street, 5
                    </Typography>
                </InputGroupContainer>
            )}
            <InputGroupContainer>
                <BuyButton disabled={isButtonDisabled} onClick={buy}>
                    Buy
                </BuyButton>
            </InputGroupContainer>
        </FormContainer>
    );
};
