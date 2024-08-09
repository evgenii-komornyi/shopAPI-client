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
    width: 97% !important;
    margin-right: auto !important;
    margin-left: auto !important;
    margin-top: ${props =>
        props.$isPersonalInfo || props.$isAddressInfo
            ? '10px !important'
            : '2px !important'};

    .MuiInputBase-root {
        input:-webkit-autofill {
            box-shadow: 0 0 0 1000px black inset;
            -webkit-text-fill-color: white;
        }
    }
`;

const CustomButton = styled(Button)`
    width: 80% !important;
    height: 50px !important;
    border: 1px solid white !important;
    color: white !important;
    margin-right: auto !important;
    margin-left: auto !important;
    letter-spacing: 3px !important;
`;

export const BuyButton = styled(CustomButton)<{ $disabled?: boolean }>`
    background-color: ${props =>
        props.disabled ? 'gray' : 'white'} !important;
    color: ${props => (props.disabled ? 'darkslategray' : 'black')} !important;
    font-weight: bold !important;

    &:hover {
        background-color: black !important;
        color: white !important;
    }
`;
