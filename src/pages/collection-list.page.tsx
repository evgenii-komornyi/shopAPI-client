import { useEffect } from 'react';

import { Container } from '@mui/material';

import { Collection } from '../components/collection/collection.component';

import useCollectionStore from '../stores/useCollection.store';

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
