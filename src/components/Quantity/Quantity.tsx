import { memo } from 'react';
import {
    AddBoxOutlined,
    IndeterminateCheckBoxOutlined,
} from '@mui/icons-material';

import { QuantityButton, QuantityText } from './styles/Quantity.styles';

import useCartStore from '../../stores/useCart.store';

import { ICartItem } from '../../interfaces/ICartItem.interface';

interface IProps {
    cartItem: ICartItem;
}

const QuantityButtons = ({ cartItem }: IProps) => {
    const { addItem, removeItem } = useCartStore(state => state);

    const { quantity } = cartItem;

    const increaseQuantity = (event: React.MouseEvent) => {
        addItem(cartItem);
        event.stopPropagation();
    };

    const decreaseQuantity = (event: React.MouseEvent) => {
        removeItem(cartItem);
        event.stopPropagation();
    };

    return (
        <>
            <QuantityButton size="small" onClick={decreaseQuantity}>
                <IndeterminateCheckBoxOutlined />
            </QuantityButton>
            <QuantityText variant="h6">{quantity}</QuantityText>
            <QuantityButton size="small" onClick={increaseQuantity}>
                <AddBoxOutlined />
            </QuantityButton>
        </>
    );
};

export const Quantity = memo(QuantityButtons);
