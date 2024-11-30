import axios, { AxiosResponse } from 'axios';
import { newAbortSignal } from '../helpers/api.helper';
import { DeliveryResponse } from '../interfaces/entities/responses/delivery/DeliveryResponse';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_DELIVERY_API_URL } = import.meta
    .env;

export const getDeliveryPriceByCountry = (
    country: string
): Promise<AxiosResponse<DeliveryResponse>> =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_DELIVERY_API_URL}/${country}`,
        {
            signal: newAbortSignal(5000),
        }
    );
