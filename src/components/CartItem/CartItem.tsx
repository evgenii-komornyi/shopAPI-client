import { formatPrice } from '../../helpers/cart.helper';
import { Quantity } from '../Quantity';

import { ICartItem } from '../../interfaces/ICartItem.interface';

interface IProps {
    cartItem: ICartItem;
}

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
} from './styles/CartItem.styles';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const CartItem = ({ cartItem }: IProps) => {
    console.log('cart item render');
    return (
        <CartItemContainer>
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
    );
};
