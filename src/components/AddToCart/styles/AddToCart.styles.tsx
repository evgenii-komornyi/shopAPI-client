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
    width: 100% !important;
    height: 70px !important;
    color: white !important;
    letter-spacing: 5px !important;
    border: 1px solid white !important;
    background-color: transparent !important;
`;
