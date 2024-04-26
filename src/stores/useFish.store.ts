import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { getFishByType } from '../api/collection.api';
import { getFishById } from '../api/fish.api';

const fishStore = set => ({
    fish: [],
    singleFish: {},
    isFishByTypeLoaded: false,
    isFishByIdLoaded: false,

    fetchFishByType: async (typeName: string) => {
        try {
            const { data } = await getFishByType(typeName);

            if (data) {
                set({ fish: data, isFishByTypeLoaded: true });
            }
        } catch (err) {
            console.error('fish store: ', err.message);
            set({ isFishByTypeLoaded: false });
        }
    },

    fetchFishById: async (fishId: number) => {
        try {
            const { data } = await getFishById(fishId);

            if (data) {
                set({ singleFish: data, isFishByIdLoaded: true });
            }
        } catch (err) {
            console.error('fish store: ', err.message);
            set({ isFishByIdLoaded: false });
        }
    },
});

const useFishStore = create(devtools(fishStore));

export default useFishStore;
