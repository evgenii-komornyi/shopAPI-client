import { CustomAddToCartButton } from './add-to-cart.styles';

export const AddToCartButton = () => {
    const addToCartHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('added to cart');
    };

    return (
        <CustomAddToCartButton onClick={addToCartHandler}>
            Add To Cart
        </CustomAddToCartButton>
    );
};
