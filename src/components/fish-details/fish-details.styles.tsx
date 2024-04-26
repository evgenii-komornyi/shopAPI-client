import { styled } from '@mui/material';

export const DetailsInfoContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
});

export const MainInfoContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
});

export const PriceContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderBottom: '2px solid #fff',
    padding: '30px 5px',
});

export const RegularPrice = styled('div')({
    textDecoration: 'line-through',
    color: 'rebeccapurple',
    fontWeight: 'bold',
});

export const ActualPrice = styled('div')({
    fontWeight: 'bolder',
});

export const SavePrice = styled('div')({
    alignContent: 'center',
    color: 'rebeccapurple',
});

export const AdditionalInfoContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
});

export const Description = styled('p')({
    lineHeight: 1.5,
});

export const OutOfStockContainer = styled('div')({
    width: '95%',
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: '10px 0',
    border: '1px solid white',
    backgroundColor: 'rgba(255, 255, 255, .4)',
    color: 'white',
    textShadow: '1px 1px rgba(0, 0, 0, 1)',
    textAlign: 'center',
});
