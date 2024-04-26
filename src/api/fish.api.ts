import axios from 'axios';
import { newAbortSignal } from '../helpers/api.helper';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_FISH_API_URL } = import.meta.env;

export const getFishById = (fishId: number) =>
    axios.get(
        `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_FISH_API_URL}/${fishId}`,
        {
            signal: newAbortSignal(5000),
        }
    );
