import { AddToCartButton } from './add-to-cart-button.component';

import { AddToCartContainer } from './add-to-cart.styles';

import { IItem } from '../../interfaces/IItem.interface';

interface IProps {
    item: IItem;
}

export const AddToCart = ({ item }: IProps) => {
    return (
        <AddToCartContainer>
            <AddToCartButton item={item} />
        </AddToCartContainer>
    );
};
