import { IconButton, SwipeableDrawer } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import { CartOverlay } from '../cart-overlay/cart-overlay.component';

import { calculateItemsCount } from '../../helpers/cart.helper';

import { useToggleDrawer } from '../../hooks/useToggleDrawer.hook';
import useCartStore from '../../stores/useCart.store';

import { CartContainer, StyledBadge } from './cart-icon.styles';

export const CartIcon = () => {
    const { isCartOverlayOpened, toggleDrawer } = useToggleDrawer();

    const { cart } = useCartStore(state => state);

    return (
        <>
            <IconButton aria-label="cart" onClick={toggleDrawer}>
                <StyledBadge
                    badgeContent={calculateItemsCount(cart)}
                    color="secondary"
                >
                    <ShoppingCart />
                </StyledBadge>
            </IconButton>
            <SwipeableDrawer
                anchor="right"
                open={isCartOverlayOpened}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
            >
                <CartContainer
                    sx={{
                        width: { xs: 345, sm: 400 },
                    }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <CartOverlay />
                </CartContainer>
            </SwipeableDrawer>
        </>
    );
};
