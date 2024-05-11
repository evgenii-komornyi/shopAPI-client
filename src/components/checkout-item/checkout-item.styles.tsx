import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CheckoutItemContainer = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10px',
    width: '100%',
});

export const ImageContainer = styled('div')({
    width: '70px',
    height: '70px',
    padding: '2px',
    borderRadius: '10px',
    boxShadow: '0 0 2px rgba(255, 255, 255, .2)',
    position: 'relative',
});

export const QuantityContainer = styled('div')({
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '5px',
    width: '25px',
    height: '25px',
    boxShadow: '0 0 3px rgba(255, 255, 255, .4)',
    position: 'absolute',
    right: '-5px',
    top: '-5px',
    backgroundColor: 'rgba(0, 0, 0, .6)',
});

export const Quantity = styled(Typography)({});

export const Image = styled('img')({
    borderRadius: '10px',
    width: '100%',
    height: '100%',
});

export const CheckoutItemNameSexContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    width: '60%',
});

export const CheckoutItemNameSexText = styled(Typography)({
    fontSize: '12px',
});

export const CheckoutItemActualPriceContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: '10px',
});

export const CheckoutItemActualPrice = styled(Typography)({
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
});
