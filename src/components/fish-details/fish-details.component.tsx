import { Grid } from '@mui/material';
import useFishStore from '../../stores/useFish.store';
import { ImageDetails } from '../image-details/image-details.component';
import { DetailsInfo } from './details-info.component';

export const FishDetails = () => {
    const { singleFish: fish } = useFishStore(state => state);

    const { files, type } = fish;

    return (
        <Grid container spacing={5} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6} md={6}>
                <ImageDetails files={files} fishType={type} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DetailsInfo fish={fish} />
            </Grid>
        </Grid>
    );
};
