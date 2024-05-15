import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { Container } from '@mui/material';

import { ItemsCollection } from '../components/items-collection/items-collection.component';

import useItemsStore from '../stores/useItems.store';

export const CategoryDetailsPage = () => {
    const { fetchItemsByType } = useItemsStore(state => state);
    const { typeName } = useParams<Params<string>>();

    useEffect(() => {
        fetchItemsByType(typeName);
    }, [fetchItemsByType, typeName]);

    return (
        <Container maxWidth="lg">
            <ItemsCollection />
        </Container>
    );
};
