import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';

import { ItemDetails } from '../components/item-details/item-details.component';

import useItemsStore from '../stores/useItems.store';

export const ItemDetailsPage = () => {
    const { itemId } = useParams();
    const { fetchItemById } = useItemsStore(state => state);

    useEffect(() => {
        fetchItemById(itemId);
    }, [fetchItemById, itemId]);

    return (
        <Container maxWidth="lg">
            <ItemDetails />
        </Container>
    );
};
