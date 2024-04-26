import { Container } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFishStore from '../stores/useFish.store';
import { FishDetails } from '../components/fish-details/fish-details.component';

export const FishDetailsPage = () => {
    const { fishId } = useParams();
    const { fetchFishById } = useFishStore(state => state);

    useEffect(() => {
        fetchFishById(fishId);
    }, [fetchFishById, fishId]);

    return (
        <Container maxWidth="lg">
            <FishDetails />
        </Container>
    );
};
