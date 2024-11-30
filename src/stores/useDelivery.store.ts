import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AxiosResponse } from 'axios';

import { handleError } from '../helpers/api.helper';
import { DeliveryResponse } from '../interfaces/entities/responses/delivery/DeliveryResponse';
import { getDeliveryPriceByCountry } from '../api/delivery.api';

interface IDeliveryState {
    price: string;
    country: string;
    showDeliveryPrice: boolean;
    error: string;
    isLoaded: boolean;

    setShowDeliveryPrice: (flag: boolean) => void;
    getDeliveryPriceByCountry: (country: string) => void;
}

const useDeliveryStore = create<IDeliveryState>()(
    devtools(set => ({
        price: '0.00',
        country: '',
        error: '',
        showDeliveryPrice: true,
        isLoaded: false,

        setShowDeliveryPrice: (flag: boolean) => {
            set({ showDeliveryPrice: flag });
        },

        getDeliveryPriceByCountry: async (country: string) => {
            try {
                const response: AxiosResponse<DeliveryResponse> =
                    await getDeliveryPriceByCountry(country);

                if (response) {
                    const { data } = response.data;

                    if (data.error) {
                        set({ error: data.error });
                    } else {
                        set({ country: data.country, price: data.price });
                    }
                }

                set({ isLoaded: true });
            } catch (error) {
                set({ isLoaded: false });
                handleError(error as Error);
            }
        },
    }))
);

export default useDeliveryStore;
