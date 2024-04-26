import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material';
import { ItemContainer } from './collection.styles';

import ICollection from './ICollection.interface';
import { Link } from 'react-router-dom';
import useCollectionStore from '../../stores/useCollection.store';

interface Item {
    item: ICollection;
}

const {
    VITE_HOST_URL,
    VITE_HOST_PORT,
    VITE_IMAGES_URL,
    VITE_COLLECTION_IMAGES_URL,
} = import.meta.env;

export const CollectionItem = ({ item: { typeName, fileName } }: Item) => {
    const { isLoaded } = useCollectionStore(state => state);

    return isLoaded ? (
        <Link to={`${typeName}`} style={{ textDecoration: 'none' }}>
            <ItemContainer sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 300 }}
                    image={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_COLLECTION_IMAGES_URL}/${typeName.toLowerCase()}/${fileName}`}
                    title={typeName}
                />
                <CardContent sx={{ bgcolor: '#000000' }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ letterSpacing: 5 }}
                    >
                        {typeName.toUpperCase()}
                    </Typography>
                </CardContent>
            </ItemContainer>
        </Link>
    ) : (
        <Card sx={{ maxWidth: 345 }} variant="outlined">
            <CardContent>
                <Skeleton
                    variant="rectangular"
                    width={'100%'}
                    height={200}
                    sx={{ mb: 1 }}
                />
                <Skeleton
                    variant="rectangular"
                    width={'50%'}
                    height={50}
                    sx={{ ml: 'auto', mr: 'auto' }}
                />
            </CardContent>
        </Card>
    );
};
