import axios from 'axios';
import { newAbortSignal } from '../helpers/api.helper';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_COLLECTION_API_URL } = import.meta
    .env;

export const getCollection = () =>
    axios.get(`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_COLLECTION_API_URL}`, {
        signal: newAbortSignal(5000),
    });

export const getItemsByType = (typeName: string) =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_COLLECTION_API_URL}/${typeName}`,
        {
            signal: newAbortSignal(5000),
        }
    );
