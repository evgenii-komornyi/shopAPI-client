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

export const Input = styled(TextField)`
    width: 97% !important;
    margin-right: auto !important;
    margin-left: auto !important;
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

export const BuyButton = styled(CustomButton)`
    background-color: white !important;
    color: black !important;
    font-weight: bold !important;

    &:hover {
        background-color: black !important;
        color: white !important;
    }
`;
