import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material';

import { AddToCartButton } from '../../../AddToCart/components/AddToCartButton';

import useItemsStore from '../../../../stores/useItems.store';

import { IItem } from '../../../../interfaces/IItem.interface';

interface IProps {
    item: IItem;
}

import {
    ActualPrice,
    ControlContainer,
    ItemContainer,
    OutOfStockContainer,
    OutOfStockLabel,
    PriceContainer,
    RegularPrice,
} from '../../styles/ItemsCollection.styles';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const Item = ({ item }: IProps) => {
    const isLoaded = useItemsStore(state => state.isItemsByTypeLoaded);

    const {
        itemId,
        itemName,
        fileName,
        typeName,
        regularPrice,
        actualPrice,
        isInStock,
    } = item;

    return isLoaded ? (
        <Link to={`item/${itemId}`} style={{ textDecoration: 'none' }}>
            <ItemContainer sx={{ maxWidth: 345 }}>
                {!isInStock && (
                    <OutOfStockContainer>
                        <OutOfStockLabel>Sold Out</OutOfStockLabel>
                    </OutOfStockContainer>
                )}
                <CardMedia
                    sx={{ height: 300 }}
                    image={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${typeName?.toLowerCase()}/${fileName}`}
                    title={itemName}
                />
                <CardContent sx={{ bgcolor: '#000000' }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ letterSpacing: 5, fontSize: 14 }}
                    >
                        {itemName.toUpperCase()}
                    </Typography>
                    <PriceContainer>
                        <RegularPrice>&euro;{regularPrice}</RegularPrice>
                        <ActualPrice>&euro;{actualPrice}</ActualPrice>
                    </PriceContainer>
                    <ControlContainer>
                        <AddToCartButton item={item} />
                    </ControlContainer>
                </CardContent>
            </ItemContainer>
        </Link>
    ) : (
        Array.of(1).map(item => (
            <Card key={item} sx={{ maxWidth: 345 }}>
                <CardContent sx={{ bgcolor: '#000000' }}>
                    <Skeleton
                        variant="rectangular"
                        width={'100%'}
                        height={300}
                    />
                    <Skeleton
                        variant="rectangular"
                        width={'100%'}
                        height={50}
                        sx={{ mt: 1 }}
                    />
                    <PriceContainer>
                        <Skeleton
                            variant="rectangular"
                            width={'49%'}
                            height={40}
                        />
                        <Skeleton
                            variant="rectangular"
                            width={'49%'}
                            height={40}
                        />
                    </PriceContainer>
                    <ControlContainer>
                        <Skeleton
                            variant="rectangular"
                            width={'95%'}
                            height={70}
                        />
                    </ControlContainer>
                </CardContent>
            </Card>
        ))
    );
};
