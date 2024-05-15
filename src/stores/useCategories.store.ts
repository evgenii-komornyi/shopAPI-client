import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getCategories } from '../api/collection.api';

import { IType } from '../interfaces/IType.interface';

interface ITypeState {
    categories: IType[];
    isLoaded: boolean;

    getAllCategories: () => void;
}

const categoriesStore = set => ({
    categories: [],
    isLoaded: false,

    getAllCategories: async () => {
        try {
            const { data } = await getCategories();

            if (data) {
                set({ categories: data, isLoaded: true });
            }
        } catch (err) {
            console.error('categories store: ', err.message);
            set({ isLoaded: false });
        }
    },
});

const useCategoriesStore = create<ITypeState>()(devtools(categoriesStore));

export default useCategoriesStore;
