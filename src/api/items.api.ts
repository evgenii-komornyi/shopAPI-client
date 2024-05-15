import axios from 'axios';
import { newAbortSignal } from '../helpers/api.helper';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_ITEMS_API_URL } = import.meta.env;

export const getItemById = (itemId: string) =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_ITEMS_API_URL}/${itemId}`,
        {
            signal: newAbortSignal(5000),
        }
    );
