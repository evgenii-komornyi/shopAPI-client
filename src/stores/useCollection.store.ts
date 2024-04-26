import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getCollection } from '../api/collection.api';

import { IType } from '../interfaces/IType.interface';

interface ITypeState {
    collection: IType[];
    isLoaded: boolean;

    getAllCollection: () => void;
}

const collectionStore = set => ({
    collection: [],
    isLoaded: false,

    getAllCollection: async () => {
        try {
            const { data } = await getCollection();

            if (data) {
                set({ collection: data, isLoaded: true });
            }
        } catch (err) {
            console.error('collection store: ', err.message);
            set({ isLoaded: false });
        }
    },
});

const useCollectionStore = create<ITypeState>()(devtools(collectionStore));

export default useCollectionStore;
