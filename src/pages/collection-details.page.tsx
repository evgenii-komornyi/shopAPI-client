import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Container } from '@mui/material';

import { ItemsCollection } from '../components/items-collection/items-collection.component';

import useItemsStore from '../stores/useItems.store';

export const CollectionDetailsPage = () => {
    const { fetchItemsByType } = useItemsStore(state => state);
    const { typeName } = useParams();

    useEffect(() => {
        fetchItemsByType(typeName);
    }, [fetchItemsByType, typeName]);

    return (
        <Container maxWidth="lg">
            <ItemsCollection />
        </Container>
    );
};
