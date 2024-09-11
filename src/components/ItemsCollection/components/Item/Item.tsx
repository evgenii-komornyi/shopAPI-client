import { NavigateFunction, useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardMedia,
    IconButton,
    Skeleton,
    Typography,
} from '@mui/material';
import { EditNoteOutlined } from '@mui/icons-material';

import { AddToCartButton } from '../../../AddToCart/components/AddToCartButton';

import useItemsStore from '../../../../stores/useItems.store';
import useUserStore from '../../../../stores/useUser.store';

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
import useAuthStore from '../../../../stores/useAuth.store';

const { VITE_HOST_URL, VITE_HOST_PORT, VITE_IMAGES_URL, VITE_FISH_IMAGES_URL } =
    import.meta.env;

export const Item = ({ item }: IProps) => {
    const isLoaded = useItemsStore(state => state.isItemsByTypeLoaded);
    const loggedInUser = useUserStore(state => state.user);
    const authorizedUser = useAuthStore(state => state.user);

    const {
        itemId,
        itemName,
        fileName,
        typeName,
        regularPrice,
        actualPrice,
        isInStock,
    } = item;

    const navigate: NavigateFunction = useNavigate();

    return isLoaded ? (
        <ItemContainer
            sx={{ maxWidth: 345 }}
            onClick={() => navigate(`item/${itemId}`)}
        >
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
            {(authorizedUser.id !== 0 &&
                authorizedUser.roles.includes('ADMIN')) ||
            (loggedInUser.id !== 0 && loggedInUser.roles.includes('ADMIN')) ? (
                <IconButton
                    onClick={e => {
                        e.stopPropagation();
                        console.log('edit');
                    }}
                >
                    <EditNoteOutlined />
                </IconButton>
            ) : null}
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
