import { Grid } from '@mui/material';

import { ImageDetails } from '../image-details/image-details.component';
import { DetailsInfo } from './details-info.component';

import useItemsStore from '../../stores/useItems.store';

export const ItemDetails = () => {
    const item = useItemsStore(state => state.item);

    const { files, type } = item;

    return (
        <Grid container spacing={5} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6} md={6}>
                <ImageDetails files={files} itemType={type} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DetailsInfo item={item} />
            </Grid>
        </Grid>
    );
};
