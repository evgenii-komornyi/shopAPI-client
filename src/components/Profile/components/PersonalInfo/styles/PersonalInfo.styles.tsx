import { Button, TextField } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const shake = keyframes`
    10%, 90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
        transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
        transform: translate3d(4px, 0, 0);
    }
`;

export const ShakingInput = styled(TextField)`
    &.shake {
        animation: ${shake} 0.5s ease-in-out;
    }
`;

const CustomButton = styled(Button)`
    width: 50% !important;
    height: 40px !important;
    color: white !important;
    margin-right: auto !important;
    margin-left: auto !important;
    letter-spacing: 3px !important;
`;

export const SaveButton = styled(CustomButton)`
    background-color: transparent !important;
    font-weight: bold !important;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
    transition: box-shadow ease-in 0.2s;

    &:hover {
        box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
        transition: box-shadow ease-in 0.2s;
    }
`;

export const PersonalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 20px 5px;
    height: auto;
    justify-content: center;
    border-radius: 20px;
    padding: 10px 20px;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
    position: relative;

    &:hover {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    }
`;

export const PersonalInfoHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin: 2px;
    justify-content: space-between;
    align-items: center;
    align-content: center;
`;

export const PersonalInfoFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px 10px;
    border: none;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`;

export const Legend = styled.legend`
    background-color: black;
    padding: 3px 25px;
    border: 1px solid white;
    border-radius: 5px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 20px;
`;

export const InputColumnGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px 50px;
`;

export const EditButtonContainer = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 5px;
    right: 5px;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`;

export const SaveButtonContainer = styled.div`
    padding: 10px;
    text-align: center;
`;
