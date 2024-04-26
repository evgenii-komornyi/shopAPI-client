import { Button, styled } from '@mui/material';

export const AddToCartContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderBottom: '2px solid white',
    padding: '30px 10px',
});

export const CustomAddToCartButton = styled(Button)({
    width: '100%',
    height: '70px',
    color: 'white',
    letterSpacing: 5,
    border: '1px solid white',
    backgroundColor: 'transparent',
});
