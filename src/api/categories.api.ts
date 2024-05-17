import axios from 'axios';
import { newAbortSignal } from '../helpers/api.helper';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_CATEGORIES_API_URL } = import.meta
    .env;

export const getCategories = () =>
    axios.get(`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_CATEGORIES_API_URL}`, {
        signal: newAbortSignal(5000),
    });

export const getItemsByCategory = (categoryName: string) =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_CATEGORIES_API_URL}/${categoryName}`,
        {
            signal: newAbortSignal(5000),
        }
    );
