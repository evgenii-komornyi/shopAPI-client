import { Fragment } from 'react';
import { IconButton, Typography } from '@mui/material';
import { CancelTwoTone } from '@mui/icons-material';

import { CartItem } from '../cart-item/cart-item.component';

import {
    calculateItemsCount,
    calculateTotalPrice,
} from '../../helpers/cart.helper';

import useCartStore from '../../stores/useCart.store';

import {
    CartCheckoutButton,
    CartClearButton,
    CartFooterButtonsContainer,
    CartFooterContainer,
    CartFooterPriceContainer,
    CartHeader,
    CartItemsContainer,
    CartOverlayContainer,
    CartPriceContainer,
    CartSavedPrice,
    CartSavedPriceText,
    CartTotalPrice,
    CartTotalPriceText,
} from './cart-overlay.styles';
import { useNavigate } from 'react-router-dom';

export const CartOverlay = () => {
    const { cart, clearCart } = useCartStore(state => state);

    const removeAllItems = (event: React.MouseEvent) => {
        clearCart();
        event.stopPropagation();
    };

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    const itemsCount: number = calculateItemsCount(cart);

    return (
        <CartOverlayContainer>
            <>
                <IconButton
                    aria-label="cancel"
                    size="large"
                    sx={{
                        position: 'absolute',
                        top: 10,
                        left: 10,
                    }}
                >
                    <CancelTwoTone />
                </IconButton>
                <CartHeader>
                    <Typography variant="h5">
                        {`Your cart has ${itemsCount} ${
                            itemsCount === 1 ? 'item' : 'items'
                        }`}
                    </Typography>
                </CartHeader>
                <CartItemsContainer>
                    {cart.length > 0 ? (
                        cart.map((cartItem, index) => (
                            <Fragment key={index}>
                                <CartItem cartItem={cartItem} />
                            </Fragment>
                        ))
                    ) : (
                        <Typography variant="h4">Cart is empty!</Typography>
                    )}
                </CartItemsContainer>
                <CartFooterContainer>
                    <CartFooterPriceContainer>
                        <CartPriceContainer>
                            <CartTotalPriceText variant="h6">
                                total price
                            </CartTotalPriceText>
                            <CartTotalPrice variant="h5">
                                &euro;
                                {calculateTotalPrice(cart, 'actual').toFixed(2)}
                            </CartTotalPrice>
                        </CartPriceContainer>
                        <CartPriceContainer>
                            <CartSavedPriceText variant="h6">
                                saved
                            </CartSavedPriceText>
                            <CartSavedPrice variant="h5">
                                &euro;
                                {(
                                    calculateTotalPrice(cart, 'regular') -
                                    calculateTotalPrice(cart, 'actual')
                                ).toFixed(2)}
                            </CartSavedPrice>
                        </CartPriceContainer>
                    </CartFooterPriceContainer>
                    {cart.length > 0 && (
                        <CartFooterButtonsContainer>
                            <CartCheckoutButton onClick={goToCheckout}>
                                checkout
                            </CartCheckoutButton>
                            <CartClearButton onClick={removeAllItems}>
                                clear cart
                            </CartClearButton>
                        </CartFooterButtonsContainer>
                    )}
                </CartFooterContainer>
            </>
        </CartOverlayContainer>
    );
};
