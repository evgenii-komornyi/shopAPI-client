import { Container } from '@mui/material';
import useFishStore from '../stores/useFish.store';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FishCollection } from '../components/fish-collection/fish-collection.component';

export const CollectionDetailsPage = () => {
    const { fetchFishByType } = useFishStore(state => state);
    const { typeName } = useParams();

    useEffect(() => {
        fetchFishByType(typeName);
    }, [fetchFishByType, typeName]);

    return (
        <Container maxWidth="lg">
            <FishCollection />
        </Container>
    );
};
