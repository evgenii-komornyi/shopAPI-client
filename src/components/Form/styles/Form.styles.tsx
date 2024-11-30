import styled from 'styled-components';
import { Button, TextField } from '@mui/material';

export const FormContainer = styled.div`
    width: 100%;
    padding: 10px 10px;
`;

export const InputGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px 10px;
`;

export const StyledTextFieldWrapper = styled.div`
    @keyframes autofill {
        to {
            color: inherit;
            background: inherit;
        }
    }

    input:-webkit-autofill {
        animation-name: autofill;
        animation-duration: 0.1s;
        animation-timing-function: ease-in-out;
    }
`;

export const Input = styled(TextField)<{
    $isPersonalInfo: boolean;
    $isAddressInfo: boolean;
}>`
    && {
        width: 97%;
        margin-right: auto;
        margin-left: auto;
        margin-top: ${props =>
            props.$isPersonalInfo || props.$isAddressInfo ? '10px' : '2px'};
    }

    .MuiInputBase-root {
        input:-webkit-autofill {
            box-shadow: 0 0 0 1000px black inset;
            -webkit-text-fill-color: white;
        }
    }
`;

const CustomButton = styled(Button)`
    && {
        width: 80%;
        height: 50px;
        border: 1px solid white;
        color: white;
        margin-right: auto;
        margin-left: auto;
        letter-spacing: 3px;
    }
`;

export const BuyButton = styled(CustomButton)<{ $disabled?: boolean }>`
    && {
        background-color: ${props => (props.disabled ? 'gray' : 'white')};
        color: ${props => (props.disabled ? 'darkslategray' : 'black')};
        font-weight: bold;
    }

    &:hover {
        && {
            background-color: black;
            color: white;
        }
    }
`;
