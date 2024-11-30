import { memo } from 'react';
import { formatPrice } from '../../helpers/cart.helper';
import { Quantity } from '../Quantity';

import {
    CartItemActualPrice,
    CartItemContainer,
    CartItemImage,
    CartItemImageContainer,
    CartItemImagePriceButtonsContainer,
    CartItemInfoContainer,
    CartItemNameSexText,
    CartItemPriceContainer,
    CartItemQuantityContainer,
    CartItemRegularPrice,
} from './styles/CartItemList.styles';
import useCartStore from '../../stores/useCart.store';
import useUserStore from '../../stores/useUser.store';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

const CartItems = () => {
    const { cart } = useCartStore(state => state);
    const { user } = useUserStore(state => state);

    return cart[user.id].map(cartItem => (
        <CartItemContainer key={cartItem.itemId}>
            <CartItemInfoContainer>
                <CartItemNameSexText variant="h5">
                    {`${cartItem.itemName} (${cartItem.sex.toString().toUpperCase()})`}
                </CartItemNameSexText>
            </CartItemInfoContainer>
            <CartItemImagePriceButtonsContainer>
                <CartItemImageContainer>
                    <CartItemImage
                        src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${cartItem.typeName?.toLowerCase()}/${cartItem.fileName}`}
                        alt={cartItem.itemName}
                    />
                </CartItemImageContainer>
                <CartItemQuantityContainer>
                    <Quantity cartItem={cartItem} />
                </CartItemQuantityContainer>
                <CartItemPriceContainer>
                    <CartItemRegularPrice>
                        &euro;{formatPrice(+cartItem.regularPrice)}
                    </CartItemRegularPrice>
                    <CartItemActualPrice>
                        &euro;
                        {formatPrice(+cartItem.actualPrice * cartItem.quantity)}
                    </CartItemActualPrice>
                </CartItemPriceContainer>
            </CartItemImagePriceButtonsContainer>
        </CartItemContainer>
    ));
};

export const CartItemList = memo(CartItems);
