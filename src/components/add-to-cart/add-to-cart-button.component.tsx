import { CustomAddToCartButton } from './add-to-cart.styles';

export const AddToCartButton = () => {
    const addToCartHandler = e => {
        e.preventDefault();
        console.log('added to cart');
    };

    return (
        <CustomAddToCartButton onClick={addToCartHandler}>
            Add To Cart
        </CustomAddToCartButton>
    );
};
