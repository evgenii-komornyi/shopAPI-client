import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CheckoutContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
});

export const FormContainer = styled('div')({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '20px',
    boxShadow: '5px 0 5px -5px rgba(255, 255, 255, .5)',
});

export const CartContainer = styled('div')({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    height: '100%',
});

export const CartItemsContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    padding: '10px',
    boxShadow: '0 0 10px rgba(255, 255, 255, .2)',

    '&:hover': {
        boxShadow: '0 0 10px rgba(255, 255, 255, .4)',
    },
});

export const TotalPriceContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '100%',
    padding: '20px',
    boxShadow: '0 -5px 3px -3px rgba(255, 255, 255, .4)',
});

export const TotalPriceText = styled(Typography)({
    textTransform: 'uppercase',
    letterSpacing: '5px',
    fontWeight: 'bold',
});

export const TotalPrice = styled(Typography)({});
