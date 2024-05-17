import { Grid } from '@mui/material';

import { ImageDetails } from './components/ImageDetails';
import { DetailsInfo } from './components/DetailsInfo';

import useItemsStore from '../../stores/useItems.store';

export const ItemDetails = () => {
    const item = useItemsStore(state => state.item);

    return (
        <Grid container spacing={5} sx={{ mt: 5 }}>
            <Grid item xs={12} sm={6} md={6}>
                <ImageDetails files={item?.files} itemType={item?.type} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <DetailsInfo item={item} />
            </Grid>
        </Grid>
    );
};
