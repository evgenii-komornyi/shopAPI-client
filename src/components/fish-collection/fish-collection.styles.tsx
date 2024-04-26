import { Card } from '@mui/material';

import { styled } from '@mui/material/styles';

export const ItemContainer = styled(Card)({
    boxShadow: '0 0 10px rgba(242,125,12, .4)',
    transition: 'box-shadow .5s ease-in',
    position: 'relative',

    '&:hover': {
        boxShadow: '0 0 5px rgba(242,125,12, .2)',
        transition: 'box-shadow .5s ease-in',
        cursor: 'pointer',
    },
});

export const PriceContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: '20px 50px',
    fontSize: '26px',
});

export const RegularPrice = styled('div')({
    textDecoration: 'line-through',
    color: 'rebeccapurple',
    fontWeight: 'bold',
});

export const ActualPrice = styled('div')({
    fontWeight: 'bolder',
});

export const OutOfStockContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, .5)',
    position: 'absolute',
    zIndex: 999,
    top: 0,
    left: 0,
});

export const OutOfStockLabel = styled('h1')({
    color: '#ff0000',
    transform: 'rotate(-45deg)',
    textTransform: 'uppercase',
});

export const ControlContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '5px',
});
