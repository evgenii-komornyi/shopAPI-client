import { Container } from '@mui/material';
import { useEffect } from 'react';
import useCollectionStore from '../stores/useCollection.store';
import { Collection } from '../components/collection/collection.component';

export const CollectionListPage = () => {
    const { getAllCollection } = useCollectionStore(state => state);
    useEffect(() => {
        getAllCollection();
    }, []);

    return (
        <Container maxWidth="lg">
            <Collection />
        </Container>
    );
};
