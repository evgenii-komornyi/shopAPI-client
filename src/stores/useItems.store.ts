import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getItemsByCategory } from '../api/categories.api';
import { getItemById } from '../api/items.api';

import { IItem } from '../interfaces/IItem.interface';
import { AxiosResponse } from 'axios';

interface IItemState {
    items: IItem[];
    item: IItem | null;
    isItemsByTypeLoaded: boolean;
    isItemByIdLoaded: boolean;

    fetchItemsByType: (typeName: string) => Promise<void>;
    fetchItemById: (itemId: string) => Promise<void>;
}

const useItemsStore = create<IItemState>()(
    devtools(set => ({
        items: [],
        item: null,
        isItemsByTypeLoaded: false,
        isItemByIdLoaded: false,

        fetchItemsByType: async (typeName: string) => {
            try {
                const response = await getItemsByCategory(typeName);
                const typedResponse = response as AxiosResponse<IItem[]>;

                if (typedResponse.data) {
                    set({
                        items: typedResponse.data,
                        isItemsByTypeLoaded: true,
                    });
                }
            } catch (err) {
                let errorMessage = 'Generic error';

                if (err instanceof Error) {
                    errorMessage = err.message;
                }

                console.error('items store: ', errorMessage);
                set({ isItemsByTypeLoaded: false });
            }
        },

        fetchItemById: async (itemId: string) => {
            try {
                const response = await getItemById(itemId);
                const typedResponse = response as AxiosResponse<IItem>;

                if (typedResponse.data) {
                    set({ item: typedResponse.data, isItemByIdLoaded: true });
                }
            } catch (err) {
                let errorMessage = 'Generic error';

                if (err instanceof Error) {
                    errorMessage = err.message;
                }

                console.error('items store: ', errorMessage);
                set({ isItemByIdLoaded: false });
            }
        },
    }))
);

export default useItemsStore;
