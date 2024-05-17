import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getCategories } from '../api/categories.api';

import { ICategory } from '../interfaces/ICategory.interface';
import { AxiosResponse } from 'axios';

interface ICategoryState {
    categories: ICategory[];
    isLoaded: boolean;

    getAllCategories: () => void;
}

const useCategoriesStore = create<ICategoryState>()(
    devtools(set => ({
        categories: [],
        isLoaded: false,

        getAllCategories: async () => {
            try {
                const response = await getCategories();
                const typedResponse = response as AxiosResponse<ICategory[]>;

                if (typedResponse.data) {
                    set({ categories: typedResponse.data, isLoaded: true });
                }
            } catch (err) {
                let errorMessage = 'Generic error';

                if (err instanceof Error) {
                    errorMessage = err.message;
                }

                console.error('items store: ', errorMessage);
                set({ isLoaded: false });
            }
        },
    }))
);

export default useCategoriesStore;
