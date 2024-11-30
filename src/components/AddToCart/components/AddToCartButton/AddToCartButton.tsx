import useCartStore from '../../../../stores/useCart.store';

import { IItem } from '../../../../interfaces/IItem.interface';

interface IProps {
    item: IItem;
}

import { CustomAddToCartButton } from '../../styles/AddToCart.styles';
import useUserStore from '../../../../stores/useUser.store';

export const AddToCartButton = ({ item }: IProps) => {
    const { addItem } = useCartStore();
    const { user } = useUserStore(state => state);

    const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        e.preventDefault();
        addItem(item, user.id);
    };

    return (
        <CustomAddToCartButton onClick={addToCartHandler}>
            Add To Cart
        </CustomAddToCartButton>
    );
};
