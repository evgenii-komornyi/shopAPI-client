import { formatPrice } from '../../helpers/cart.helper';

import {
    CheckoutItemActualPrice,
    CheckoutItemActualPriceContainer,
    CheckoutItemContainer,
    CheckoutItemNameSexContainer,
    CheckoutItemNameSexText,
    Image,
    ImageContainer,
    Quantity,
    QuantityContainer,
} from './checkout-item.styles';

import { ICartItem } from '../../interfaces/ICartItem.interface';

interface IProps {
    cartItem: ICartItem;
}

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const CheckoutItem = ({ cartItem }: IProps) => {
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image
                    src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${cartItem.typeName?.toLowerCase()}/${cartItem.fileName}`}
                    alt={cartItem.itemName}
                />
                <QuantityContainer>
                    <Quantity variant="body1">{cartItem.quantity}</Quantity>
                </QuantityContainer>
            </ImageContainer>
            <CheckoutItemNameSexContainer>
                <CheckoutItemNameSexText variant="h5">
                    {`${cartItem.itemName} (${cartItem.sex.toString().toUpperCase()})`}
                </CheckoutItemNameSexText>
            </CheckoutItemNameSexContainer>
            <CheckoutItemActualPriceContainer>
                <CheckoutItemActualPrice variant="h4">
                    &euro;{' '}
                    {formatPrice(+cartItem.actualPrice * cartItem.quantity)}
                </CheckoutItemActualPrice>
            </CheckoutItemActualPriceContainer>
        </CheckoutItemContainer>
    );
};
