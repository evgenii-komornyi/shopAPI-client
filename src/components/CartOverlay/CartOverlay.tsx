import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';
import { CancelTwoTone } from '@mui/icons-material';

import { CartItemList } from '../CartItemList';

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
} from './styles/CartOverlay.styles';
import useUserStore from '../../stores/useUser.store';

export const CartOverlay = () => {
    const { cart, clearCart } = useCartStore(state => state);
    const { user } = useUserStore(state => state);

    const removeAllItems = (event: React.MouseEvent) => {
        clearCart(user.id);
        event.stopPropagation();
    };

    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    const itemsCount: number = useMemo(
        () => calculateItemsCount(cart[user.id]),
        [cart, user.id]
    );
    const totalPrice: number = useMemo(
        () => calculateTotalPrice(cart[user.id], 'actual'),
        [cart, user.id]
    );
    const savedPrice: number = useMemo(() => {
        const regularPrice = calculateTotalPrice(cart[user.id], 'regular');
        return regularPrice - totalPrice;
    }, [cart, totalPrice, user.id]);

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
                    {cart[user.id] && cart[user.id].length > 0 ? (
                        <CartItemList />
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
                                {totalPrice.toFixed(2)}
                            </CartTotalPrice>
                        </CartPriceContainer>
                        <CartPriceContainer>
                            <CartSavedPriceText variant="h6">
                                saved
                            </CartSavedPriceText>
                            <CartSavedPrice variant="h5">
                                &euro;
                                {savedPrice.toFixed(2)}
                            </CartSavedPrice>
                        </CartPriceContainer>
                    </CartFooterPriceContainer>
                    {cart[user.id] && cart[user.id].length > 0 && (
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
