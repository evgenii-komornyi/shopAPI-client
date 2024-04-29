import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { addItemToCart, removeItemFromCart } from '../helpers/cart.helper';

const cartStore = set => ({
    cart: [],

    addItem: itemToAdd => {
        set(state => ({ cart: addItemToCart(state.cart, itemToAdd) }));
    },

    removeItem: itemToRemove => {
        set(state => ({ cart: removeItemFromCart(state.cart, itemToRemove) }));
    },

    removeWholeItem: itemIdToRemove => {
        set(state => ({
            cart: state.cart.filter(
                cartItem => cartItem.itemId !== itemIdToRemove
            ),
        }));
    },

    clearCart: () => {
        set({ cart: [] });
    },
});

const useCartStore = create(persist(devtools(cartStore), { name: 'cart' }));

export default useCartStore;
