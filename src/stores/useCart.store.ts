import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { addItemToCart, removeItemFromCart } from '../helpers/cart.helper';
import { IItem } from '../interfaces/IItem.interface';
import { Cart } from '../types/Cart.type';

interface ICartState {
    cart: Cart;

    createCartByUserId: (userId: number) => void;
    mergeCarts: (userId: number) => void;
    addItem: (itemToAdd: IItem, userId: number) => void;
    removeItem: (itemToRemove: IItem, userId: number) => void;
    removeWholeItem: (itemIdToRemove: number, userId: number) => void;
    clearCart: (userId: number) => void;
}

const useCartStore = create<ICartState>()(
    devtools(
        persist(
            set => ({
                cart: { 0: [] },

                createCartByUserId: (userId: number): void => {
                    set(state => ({ cart: { ...state.cart, [userId]: [] } }));
                },

                mergeCarts: (userId: number): void => {
                    set(state => {
                        const cart0Items = state.cart[0] || [];
                        const userCartItems = state.cart[userId] || [];

                        const userCartMap = new Map(
                            userCartItems.map(item => [item.itemId, item])
                        );

                        const mergedCartItems = cart0Items.map(cart0Item => {
                            const existingItem = userCartMap.get(
                                cart0Item.itemId
                            );

                            if (existingItem) {
                                return {
                                    ...existingItem,
                                    quantity:
                                        existingItem.quantity +
                                        cart0Item.quantity,
                                };
                            }

                            return cart0Item;
                        });

                        const finalCartItems = [
                            ...userCartItems.filter(
                                item =>
                                    !cart0Items.find(
                                        cart0Item =>
                                            cart0Item.itemId === item.itemId
                                    )
                            ),
                            ...mergedCartItems,
                        ];

                        return {
                            cart: {
                                ...state.cart,
                                [userId]: finalCartItems,
                                0: [],
                            },
                        };
                    });
                },

                addItem: (itemToAdd: IItem, userId: number) => {
                    set(state => ({
                        cart: {
                            ...state.cart,
                            [userId]: addItemToCart(
                                state.cart[userId] || [],
                                itemToAdd
                            ),
                        },
                    }));
                },

                removeItem: (itemToRemove: IItem, userId: number) => {
                    set(state => ({
                        cart: {
                            ...state.cart,

                            [userId]: removeItemFromCart(
                                state.cart[userId] || [],
                                itemToRemove
                            ),
                        },
                    }));
                },

                removeWholeItem: (itemIdToRemove: number, userId: number) => {
                    set(state => ({
                        cart: {
                            ...state.cart,
                            [userId]: state.cart[userId].filter(
                                cartItem => cartItem.itemId !== itemIdToRemove
                            ),
                        },
                    }));
                },

                clearCart: (userId: number) => {
                    set(state => ({ cart: { ...state.cart, [userId]: [] } }));
                },
            }),
            { name: 'cart' }
        )
    )
);

export default useCartStore;
