import { Grid, Skeleton, Typography } from '@mui/material';
import { Item } from './item.component';

import useItemsStore from '../../stores/useItems.store';

import { IItem } from '../../interfaces/IItem.interface';

export const ItemsCollection = () => {
    const items: IItem[] = useItemsStore(state => state.items);
    const isLoaded = useItemsStore(state => state.isItemsByTypeLoaded);

    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item alignContent="center" xs={12}>
                {isLoaded ? (
                    <Typography
                        variant="h3"
                        sx={{ textAlign: 'center', letterSpacing: 8 }}
                    >
                        {items[0]?.typeName?.toUpperCase()}
                    </Typography>
                ) : (
                    <Skeleton
                        sx={{ mr: 'auto', ml: 'auto', mb: 1 }}
                        variant="rectangular"
                        width={200}
                        height={40}
                    />
                )}
            </Grid>
            <Grid item xs={12}>
                {isLoaded ? (
                    <Typography variant="body1" sx={{ textIndent: 50, mb: 2 }}>
                        {items[0]?.typeDescription}
                    </Typography>
                ) : (
                    <Skeleton
                        variant="rectangular"
                        width={'90%'}
                        height={100}
                        sx={{ ml: 'auto', mr: 'auto', mb: 2 }}
                    />
                )}
            </Grid>
            {items
                .filter(item => item.isAvailable)
                .map(item => (
                    <Grid
                        key={item.itemId}
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        textAlign="center"
                    >
                        <Item item={item} />
                    </Grid>
                ))}
        </Grid>
    );
};
