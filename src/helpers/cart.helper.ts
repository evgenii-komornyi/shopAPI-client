import { ICartItem } from '../interfaces/ICartItem.interface';
import { IItem } from '../interfaces/IItem.interface';

export const addItemToCart = (
    cartItems: ICartItem[],
    cartItemToAdd: IItem
): ICartItem[] => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.itemId === cartItemToAdd.itemId
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.itemId === cartItemToAdd.itemId
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [
        ...cartItems,
        {
            ...cartItemToAdd,
            quantity: 1,
        },
    ];
};

export const removeItemFromCart = (
    cartItems: ICartItem[],
    cartItemToRemove: IItem
): ICartItem[] => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.itemId === cartItemToRemove.itemId
    );

    if (existingCartItem && existingCartItem.quantity === 1) {
        return cartItems.filter(
            cartItem => cartItem.itemId !== cartItemToRemove.itemId
        );
    }

    return cartItems.map(cartItem =>
        cartItem.itemId === cartItemToRemove.itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

export const calculateTotalPrice = (
    cartItems: ICartItem[],
    priceType: string
): number =>
    priceType === 'regular'
        ? cartItems.reduce(
              (total, item) => total + item.regularPrice * item.quantity,
              0
          )
        : cartItems.reduce(
              (total, item) => total + item.actualPrice * item.quantity,
              0
          );

export const calculateItemsCount = (items: ICartItem[]): number =>
    items.reduce(
        (accumulatedCount, item) => accumulatedCount + item.quantity,
        0
    );

export const formatPrice = (price: number): string => price.toFixed(2);
