import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

import { CheckoutForm } from './components/CheckoutForm';
import { CheckoutItem } from './components/CheckoutItem';

import { calculateTotalPrice } from '../../helpers/cart.helper';

import useCartStore from '../../stores/useCart.store';

import {
    CartContainer,
    CartItemsContainer,
    FormContainer,
    TotalPrice,
    TotalPriceContainer,
    TotalPriceText,
} from './styles/Checkout.styles';
import useUserStore from '../../stores/useUser.store';
import { CheckoutFormLoggedInUser } from './components/CheckoutFormLoggedInUser';

export const Checkout = () => {
    const { cart } = useCartStore(state => state);
    const { user, getUserById } = useUserStore(state => state);
    const navigate = useNavigate();

    useEffect(() => {
        // if (cart[user.id].length === 0) navigate('/');
        getUserById();
    }, [cart, navigate, getUserById, user.id]);

    return (
        <Grid container spacing={5} sx={{ mt: 4 }}>
            <Grid item xs={12} sm={12} md={6}>
                <FormContainer>
                    {user.id === 0 ? (
                        <CheckoutForm />
                    ) : (
                        <CheckoutFormLoggedInUser />
                    )}
                </FormContainer>
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ mt: 4 }}>
                <CartContainer>
                    <CartItemsContainer>
                        {cart[user.id].map((cartItem, index) => (
                            <Fragment key={index}>
                                <CheckoutItem cartItem={cartItem} />
                            </Fragment>
                        ))}
                    </CartItemsContainer>
                    <TotalPriceContainer>
                        <TotalPriceText variant="h6">
                            total price
                        </TotalPriceText>
                        <TotalPrice variant="h6">
                            &euro;{' '}
                            {calculateTotalPrice(
                                cart[user.id],
                                'actual'
                            ).toFixed(2)}
                        </TotalPrice>
                    </TotalPriceContainer>
                </CartContainer>
            </Grid>
        </Grid>
    );
};
