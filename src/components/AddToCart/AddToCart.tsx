import { AddToCartButton } from './components/AddToCartButton';

import { AddToCartContainer } from './styles/AddToCart.styles';

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
