import { Skeleton, Typography } from '@mui/material';

import { AddToCart } from '../add-to-cart/add-to-cart.component';

import useFishStore from '../../stores/useFish.store';

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
} from './fish-details.styles';

import { IFish } from '../../interfaces/IFish.interface';
interface IProps {
    fish: IFish;
}

export const DetailsInfo = (props: IProps) => {
    const isLoaded = useFishStore(state => state.isFishByIdLoaded);
    const {
        fishName,
        sex,
        regularPrice,
        discount,
        actualPrice,
        isInStock,
        description,
    } = props.fish;

    return (
        <DetailsInfoContainer>
            <MainInfoContainer>
                {isLoaded ? (
                    <Typography variant="h4" sx={{ letterSpacing: 3 }}>
                        {fishName} (
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
                            <RegularPrice
                                sx={{ fontSize: { xs: 20, sm: 20, md: 40 } }}
                            >
                                &euro;{regularPrice}
                            </RegularPrice>
                            <ActualPrice
                                sx={{ fontSize: { xs: 20, sm: 20, md: 40 } }}
                            >
                                &euro;{actualPrice}
                            </ActualPrice>
                            <SavePrice sx={{ fontSize: { xs: 15 } }}>
                                Save &euro;
                                {(regularPrice * (discount / 100)).toFixed(2)}
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
                    <AddToCart />
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
