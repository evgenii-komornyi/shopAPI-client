import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CartItemContainer = styled('div')({
    width: '100%',
    height: '170px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(255, 255, 255, .2)',
    padding: '10px',
    margin: '10px auto',
    transition: 'box-shadow .2s ease-in',

    '&:hover': {
        boxShadow: '0 0 10px rgba(255, 255, 255, .8)',
        transition: 'box-shadow .2s ease-in',
    },
});

export const CartItemInfoContainer = styled('div')({
    padding: '5px',
});

export const CartItemNameSexText = styled(Typography)({
    fontSize: '12px',
    textAlign: 'center',
});

export const CartItemImagePriceButtonsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '10px',
    padding: '5px',
});

export const CartItemImageContainer = styled('div')({
    flex: 2,
    borderRadius: '10px',
    boxShadow: '0 0 5px rgba(255, 255, 255, .5)',
});

export const CartItemImage = styled('img')({
    width: '100%',
    height: '100%',
    borderRadius: '10px',
});

export const CartItemPriceContainer = styled('div')({
    flex: 2.5,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 5px rgba(255, 255, 255, .5)',
});

export const CartItemRegularPrice = styled(Typography)({
    textAlign: 'center',
    marginBottom: '10px',
    textDecoration: 'line-through',
    fontWeight: 'bold',
});

export const CartItemActualPrice = styled(Typography)({
    textAlign: 'center',
});

export const CartItemQuantityContainer = styled('div')({
    flex: 3,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 5px',
    boxShadow: '0 0 5px rgba(255, 255, 255, .5)',
});
