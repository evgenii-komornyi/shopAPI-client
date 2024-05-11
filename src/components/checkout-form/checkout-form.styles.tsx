import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FormContainer = styled('div')({
    width: '100%',
    padding: '10px 10px',
});

export const InputGroupContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: '20px 10px',
});

export const Input = styled(TextField)({
    width: '97%',
    marginRight: 'auto',
    marginLeft: 'auto',
});

const CustomButton = styled(Button)({
    width: '80%',
    height: '50px',
    border: '1px solid white',
    color: 'white',
    marginRight: 'auto',
    marginLeft: 'auto',
    letterSpacing: '3px',
});

export const BuyButton = styled(CustomButton)({
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',

    '&:hover': {
        backgroundColor: 'black',
        color: 'white',
    },
});
