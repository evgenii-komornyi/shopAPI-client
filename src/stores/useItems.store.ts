import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getItemsByCategory } from '../api/collection.api';
import { getItemById } from '../api/items.api';

import { IItem } from '../interfaces/IItem.interface';

interface IItemState {
    items: IItem[];
    item: IItem;
    isItemsByTypeLoaded: boolean;
    isItemByIdLoaded: boolean;

    fetchItemsByType: (typeName: string | undefined) => void;
    fetchItemById: (itemId: string | undefined) => void;
}

const itemsStore = set => ({
    items: [],
    item: {},
    isItemsByTypeLoaded: false,
    isItemByIdLoaded: false,

    fetchItemsByType: async (typeName: string) => {
        try {
            const { data } = await getItemsByCategory(typeName);

            if (data) {
                set({ items: data, isItemsByTypeLoaded: true });
            }
        } catch (err) {
            console.error('items store: ', err.message);
            set({ isItemsByTypeLoaded: false });
        }
    },

    fetchItemById: async (itemId: string) => {
        try {
            const { data } = await getItemById(itemId);

            if (data) {
                set({ item: data, isItemByIdLoaded: true });
            }
        } catch (err) {
            console.error('items store: ', err.message);
            set({ isItemByIdLoaded: false });
        }
    },
});

const useItemsStore = create<IItemState>()(devtools(itemsStore));

export default useItemsStore;
