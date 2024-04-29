import { Button, Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

export const CartOverlayContainer = styled('div')({
    width: '100%',
    height: '100vh',
    backgroundColor: '#000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: 'inset 0 0 10px rgba(242,125,12, .4)',
    padding: '25px 5px',
});

export const CartWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
});

export const CartHeader = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    letterSpacing: '3px',
});

export const CartItemsContainer = styled('div')({
    overflowY: 'auto',
    overflowX: 'hidden',
    padding: '10px',
    marginTop: '20px',
    marginBottom: '20px',
    width: '100%',
    height: '50vh',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 5,
    borderBottom: '1px solid white',
    borderTop: '1px solid white',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(255,255,255, .2)',
    transition: 'box-shadow .5s ease-in',

    '&:hover': {
        boxShadow: '0 0 20px rgba(255,255,255, .4)',
        transition: 'box-shadow .5s ease-in',
    },
});

export const CartFooterContainer = styled('div')({
    display: 'flex',
    flex: 2,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
});

export const CartFooterPriceContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: '10px 50px',
    marginTop: '10px',
});

export const CartPriceContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
});

export const CartTotalPriceText = styled(Typography)({
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    textTransform: 'uppercase',
});

export const CartTotalPrice = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
});

export const CartSavedPriceText = styled(Typography)({
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    textTransform: 'uppercase',
});

export const CartSavedPrice = styled(Typography)({
    fontSize: '2rem',
    fontWeight: 'bold',
});

export const CartFooterButtonsContainer = styled('div')({
    display: 'flex',
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 30px',
});

const CustomButton = styled(Button)({
    width: '48%',
    height: '70px',
    border: '1px solid white',
    color: 'white',
    letterSpacing: '3px',
});

export const CartCheckoutButton = styled(CustomButton)({
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',

    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
});

export const CartClearButton = styled(CustomButton)({
    '&:hover': {
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 10px rgba(255, 255, 255, .5)',
    },
});
