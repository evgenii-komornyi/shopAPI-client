import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { ItemDetails } from '../components/ItemDetails';

import useItemsStore from '../stores/useItems.store';

export const ItemDetailsPage = () => {
    const { itemId } = useParams();
    const { fetchItemById } = useItemsStore(state => state);

    useEffect(() => {
        if (itemId) void fetchItemById(itemId);
    }, [itemId, fetchItemById]);

    return (
        <Container maxWidth="lg">
            <ItemDetails />
        </Container>
    );
};
