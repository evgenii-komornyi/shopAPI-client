import { Skeleton, Typography } from '@mui/material';

import { AddToCart } from '../add-to-cart/add-to-cart.component';

import useItemsStore from '../../stores/useItems.store';

import { IItem } from '../../interfaces/IItem.interface';

interface IProps {
    item: IItem;
}

import {
    ActualPrice,
    AdditionalInfoContainer,
    Description,
    DetailsInfoContainer,
    MainInfoContainer,
    OutOfStockContainer,
    PriceContainer,
    RegularPrice,
    SavePrice,
} from './item-details.styles';

export const DetailsInfo = ({ item }: IProps) => {
    const isLoaded = useItemsStore(state => state.isItemByIdLoaded);

    const {
        itemName,
        sex,
        regularPrice,
        discount,
        actualPrice,
        isInStock,
        type,
        description,
        files,
    } = item;

    return (
        <DetailsInfoContainer>
            <MainInfoContainer>
                {isLoaded ? (
                    <Typography variant="h4" sx={{ letterSpacing: 3 }}>
                        {itemName} (
                        <span style={{ textTransform: 'uppercase' }}>
                            {sex}
                        </span>
                        )
                    </Typography>
                ) : (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={100}
                        sx={{ mt: -1 }}
                    />
                )}
                <PriceContainer>
                    {isLoaded ? (
                        <>
                            <RegularPrice>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 20, sm: 20, md: 40 },
                                    }}
                                    variant="body1"
                                >
                                    &euro;{regularPrice}
                                </Typography>
                            </RegularPrice>
                            <ActualPrice>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 20, sm: 20, md: 40 },
                                    }}
                                    variant="body1"
                                >
                                    &euro;{actualPrice}
                                </Typography>
                            </ActualPrice>
                            <SavePrice>
                                <Typography
                                    sx={{ fontSize: { xs: 15 } }}
                                    variant="body1"
                                >
                                    Save &euro;
                                    {(regularPrice * (discount / 100)).toFixed(
                                        2
                                    )}
                                </Typography>
                            </SavePrice>
                        </>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            width="100%"
                            height={100}
                            sx={{ mt: 2, mb: 2 }}
                        />
                    )}
                </PriceContainer>
            </MainInfoContainer>
            {isLoaded ? (
                isInStock ? (
                    <AddToCart
                        item={{
                            ...item,
                            typeName: type,
                            fileName: files?.[0].fileName,
                        }}
                    />
                ) : (
                    <OutOfStockContainer>
                        <Typography variant="h4">Sold Out</Typography>
                    </OutOfStockContainer>
                )
            ) : (
                <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={100}
                    sx={{ mt: 1 }}
                />
            )}
            <AdditionalInfoContainer>
                {isLoaded ? (
                    <Description>{description}</Description>
                ) : (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={200}
                        sx={{ mt: 1 }}
                    />
                )}
            </AdditionalInfoContainer>
        </DetailsInfoContainer>
    );
};
