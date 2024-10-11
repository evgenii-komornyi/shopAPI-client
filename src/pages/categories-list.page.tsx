import { useEffect } from 'react';
import { Container } from '@mui/material';

import { Categories } from '../components/Categories';

import useCategoriesStore from '../stores/useCategories.store';

export const CategoriesListPage = () => {
    const { getAllCategories } = useCategoriesStore(state => state);

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <Container maxWidth="lg">
            <Categories />
        </Container>
    );
};
