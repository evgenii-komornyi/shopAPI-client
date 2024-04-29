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
} from './cart-item.styles';

import { ICartItem } from '../../interfaces/ICartItem.interface';
import { formatPrice } from '../../helpers/cart.helper';
import { Quantity } from '../quantity/quantity.component';

interface IProps {
    cartItem: ICartItem;
}

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const CartItem = ({ cartItem }: IProps) => {
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
