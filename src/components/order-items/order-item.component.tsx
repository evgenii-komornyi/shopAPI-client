import { formatPrice } from '../../helpers/cart.helper';
import { IOrderItem } from '../../interfaces/order/IOrderItem.interface';
import {
    Image,
    ImageContainer,
    OrderItemActualPrice,
    OrderItemActualPriceContainer,
    OrderItemContainer,
    OrderItemNameSexContainer,
    OrderItemNameSexText,
    Quantity,
    QuantityContainer,
} from './order-items.styles';

interface IProps {
    orderItem: IOrderItem;
}

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const OrderItem = ({
    orderItem: { itemName, sex, itemPrice, typeName, fileName, quantity },
}: IProps) => {
    return (
        <OrderItemContainer>
            <ImageContainer>
                <Image
                    src={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${typeName?.toLowerCase()}/${fileName}`}
                    alt={itemName}
                />
                <QuantityContainer>
                    <Quantity>{quantity}</Quantity>
                </QuantityContainer>
            </ImageContainer>
            <OrderItemNameSexContainer>
                <OrderItemNameSexText>
                    {`${itemName} (${sex.toString().toUpperCase()})`}
                </OrderItemNameSexText>
            </OrderItemNameSexContainer>
            <OrderItemActualPriceContainer>
                <OrderItemActualPrice>
                    &euro; {formatPrice(+itemPrice * quantity)}
                </OrderItemActualPrice>
            </OrderItemActualPriceContainer>
        </OrderItemContainer>
    );
};
