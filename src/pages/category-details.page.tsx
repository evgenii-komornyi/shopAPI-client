import { useEffect } from 'react';
import { useParams, Params } from 'react-router-dom';
import { Container } from '@mui/material';

import { ItemsCollection } from '../components/ItemsCollection';

import useItemsStore from '../stores/useItems.store';

export const CategoryDetailsPage = () => {
    const { fetchItemsByType } = useItemsStore(state => state);
    const { typeName } = useParams<Params<string>>();

    useEffect(() => {
        if (typeName) void fetchItemsByType(typeName);
    }, [typeName]);

    return (
        <Container maxWidth="lg">
            <ItemsCollection />
        </Container>
    );
};
