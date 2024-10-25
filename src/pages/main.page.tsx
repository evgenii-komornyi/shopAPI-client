import { Container } from '@mui/material';
import { useEffect, useMemo } from 'react';
import useCategoriesStore from '../stores/useCategories.store.ts';
import { Carousel, Slide } from '../components/Carousel';

const {
    VITE_HOST_URL,
    VITE_HOST_PORT,
    VITE_IMAGES_URL,
    VITE_CATEGORIES_IMAGES_URL,
} = import.meta.env;

export const MainPage = () => {
    const { categories, getAllCategories } = useCategoriesStore(state => state);
    const slides: Slide[] = useMemo(() => categories.map(categoryItem => ({image: `${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_CATEGORIES_IMAGES_URL}/${categoryItem.typeName.toLowerCase()}/${categoryItem.fileName}`, text: categoryItem.typeName})), [categories]);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <Container maxWidth="lg">
            <Carousel slides={slides} />
        </Container>
    );
};
