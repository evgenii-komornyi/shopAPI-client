import { Skeleton, Typography } from '@mui/material';

import { AddToCart } from '../../../AddToCart';

import useItemsStore from '../../../../stores/useItems.store';

import { IItem } from '../../../../interfaces/IItem.interface';

interface IProps {
    item: IItem | null;
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
} from '../../styles/ItemDetails.styles';

export const DetailsInfo = ({ item }: IProps) => {
    const isLoaded = useItemsStore(state => state.isItemByIdLoaded);

    return (
        <DetailsInfoContainer>
            <MainInfoContainer>
                {isLoaded ? (
                    <Typography variant="h4" sx={{ letterSpacing: 3 }}>
                        {item?.itemName} (
                        <span style={{ textTransform: 'uppercase' }}>
                            {item?.sex}
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
                                    &euro;{item?.regularPrice}
                                </Typography>
                            </RegularPrice>
                            <ActualPrice>
                                <Typography
                                    sx={{
                                        fontSize: { xs: 20, sm: 20, md: 40 },
                                    }}
                                    variant="body1"
                                >
                                    &euro;{item?.actualPrice}
                                </Typography>
                            </ActualPrice>
                            <SavePrice>
                                <Typography
                                    sx={{ fontSize: { xs: 15 } }}
                                    variant="body1"
                                >
                                    Save &euro;
                                    {item?.regularPrice !== undefined &&
                                    item?.discount !== undefined
                                        ? (
                                              item?.regularPrice *
                                              (item?.discount / 100)
                                          ).toFixed(2)
                                        : 0.0}
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
                item?.isInStock ? (
                    <AddToCart
                        item={{
                            ...item,
                            typeName: item?.type,
                            fileName: item?.files?.[0].fileName,
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
                    <Description>{item?.description}</Description>
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
