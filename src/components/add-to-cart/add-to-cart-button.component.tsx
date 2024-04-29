import { CustomAddToCartButton } from './add-to-cart.styles';

import useCartStore from '../../stores/useCart.store';

import { IItem } from '../../interfaces/IItem.interface';

interface IProps {
    item: IItem;
}

export const AddToCartButton = ({ item }: IProps) => {
    const { addItem } = useCartStore();

    const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addItem(item);
    };

    return (
        <CustomAddToCartButton onClick={addToCartHandler}>
            Add To Cart
        </CustomAddToCartButton>
    );
};
