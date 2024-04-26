import { Grid } from '@mui/material';

import { ImageDetails } from '../image-details/image-details.component';
import { DetailsInfo } from './details-info.component';

import useFishStore from '../../stores/useFish.store';

export const FishDetails = () => {
    const fish = useFishStore(state => state.singleFish);

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
