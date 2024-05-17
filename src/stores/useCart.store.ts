import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { addItemToCart, removeItemFromCart } from '../helpers/cart.helper';
import { ICartItem } from '../interfaces/ICartItem.interface';
import { IItem } from '../interfaces/IItem.interface';

interface ICartState {
    cart: ICartItem[];

    addItem: (itemToAdd: IItem) => void;
    removeItem: (itemToRemove: IItem) => void;
    removeWholeItem: (itemIdToRemove: number) => void;
    clearCart: () => void;
}

const useCartStore = create<ICartState>()(
    devtools(
        persist(
            set => ({
                cart: [],

                addItem: (itemToAdd: IItem) => {
                    set(state => ({
                        cart: addItemToCart(state.cart, itemToAdd),
                    }));
                },

                removeItem: (itemToRemove: IItem) => {
                    set(state => ({
                        cart: removeItemFromCart(state.cart, itemToRemove),
                    }));
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
            }),
            { name: 'cart' }
        )
    )
);

export default useCartStore;
