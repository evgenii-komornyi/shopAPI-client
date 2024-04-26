import { Grid, Skeleton, Typography } from '@mui/material';
import { FishItem } from './fish-item.component';

import useFishStore from '../../stores/useFish.store';

import { IFish } from '../../interfaces/IFish.interface';

export const FishCollection = () => {
    const fish: IFish[] = useFishStore(state => state.fish);
    const isLoaded = useFishStore(state => state.isFishByTypeLoaded);

    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item alignContent="center" xs={12}>
                {isLoaded ? (
                    <Typography
                        variant="h3"
                        sx={{ textAlign: 'center', letterSpacing: 8 }}
                    >
                        {fish[0]?.typeName?.toUpperCase()}
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
                        {fish[0]?.typeDescription}
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
            {fish
                .filter(item => item.isAvailable)
                .map(fishItem => (
                    <Grid
                        key={fishItem.fishId}
                        item
                        xs={12}
                        sm={12}
                        md={4}
                        textAlign="center"
                    >
                        <FishItem fishItem={fishItem} />
                    </Grid>
                ))}
        </Grid>
    );
};
