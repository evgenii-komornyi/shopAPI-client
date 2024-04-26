import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getCollection } from '../api/collection.api';

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

const useCollectionStore = create(devtools(collectionStore));

export default useCollectionStore;
