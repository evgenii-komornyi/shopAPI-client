import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FieldSetContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
`;

export const FieldSet = styled.fieldset<{
    $isUserInfo?: boolean;
    $isAddress?: boolean;
    $isLogin?: boolean;
}>`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: ${props =>
        props.$isLogin ?? props.$isAddress ? '100%' : 'calc(50% - 10px)'};
    height: ${props =>
        props.$isUserInfo ?? props.$isAddress ? '270px' : 'auto'};
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px 10px;
`;

export const Legend = styled.legend`
    padding: 3px 25px;
    border: 1px solid white;
    border-radius: 5px;
`;

export const InputGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 20px 10px;
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

export const RegisterButton = styled(CustomButton)<{ $disabled?: boolean }>`
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
