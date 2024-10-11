import styled from 'styled-components';
import { Button } from '@mui/material';

export const AddToCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-bottom: 2px solid white;
    padding: 30px 10px;
`;

export const CustomAddToCartButton = styled(Button)`
    width: 100%;
    && {
        height: 70px;
        color: white;
        letter-spacing: 5px;
        border: 1px solid white;
        background-color: transparent;
        transition: box-shadow 0.5s linear;
    }

    &:hover {
        && {
            background: transparent;
        }
        box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.8);
        transition: box-shadow 0.5s linear;
    }
`;
