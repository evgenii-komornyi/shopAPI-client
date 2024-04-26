import { Link } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    Skeleton,
    Typography,
} from '@mui/material';
import {
    ActualPrice,
    ControlContainer,
    ItemContainer,
    OutOfStockContainer,
    OutOfStockLabel,
    PriceContainer,
    RegularPrice,
} from './fish-collection.styles';
import { AddToCartButton } from '../add-to-cart/add-to-cart-button.component';
import useFishStore from '../../stores/useFish.store';

enum SexEnum {
    'male',
    'female',
}

interface IFishItem {
    actualPrice: number;
    description: string;
    discount: number;
    fishId: number;
    fishName: string;
    fileName: string;
    isAvailable: boolean;
    isInStock: boolean;
    regularPrice: number;
    sex: SexEnum;
    typeDescription: string;
    typeId: number;
    typeName: string;
}

interface Item {
    fishItem: IFishItem;
}

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const FishItem = ({
    fishItem: {
        fishId,
        fishName,
        fileName,
        typeName,
        regularPrice,
        actualPrice,
        isInStock,
    },
}: Item) => {
    const isLoaded = useFishStore(state => state.isFishByTypeLoaded);

    return isLoaded ? (
        <Link to={`fish/${fishId}`} style={{ textDecoration: 'none' }}>
            <ItemContainer sx={{ maxWidth: 345 }}>
                {!isInStock && (
                    <OutOfStockContainer>
                        <OutOfStockLabel>Sold Out</OutOfStockLabel>
                    </OutOfStockContainer>
                )}
                <CardMedia
                    sx={{ height: 300 }}
                    image={`${VITE_HOST_URL}:${VITE_HOST_PORT}/${VITE_IMAGES_URL}/${VITE_FISH_IMAGES_URL}/${typeName.toLowerCase()}/${fileName}`}
                    title={fishName}
                />
                <CardContent sx={{ bgcolor: '#000000' }}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ letterSpacing: 5, fontSize: 14 }}
                    >
                        {fishName.toUpperCase()}
                    </Typography>
                    <PriceContainer>
                        <RegularPrice>&euro;{regularPrice}</RegularPrice>
                        <ActualPrice>&euro;{actualPrice}</ActualPrice>
                    </PriceContainer>
                    <ControlContainer>
                        <AddToCartButton />
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
