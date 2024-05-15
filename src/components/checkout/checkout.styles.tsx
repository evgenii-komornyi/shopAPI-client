import styled from 'styled-components';
import { Typography } from '@mui/material';

export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 100%;
`;

export const FormContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 20px;
    box-shadow: 5px 0 5px -5px rgba(255, 255, 255, 0.5);
`;

export const CartContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    height: 100%;
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    padding: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

    &:hover {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
    }
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
    width: 100%;
    margin-top: 5px;
    padding: 20px;
    box-shadow: 0 -5px 3px -3px rgba(255, 255, 255, 0.4);
`;

export const TotalPriceText = styled(Typography)`
    text-transform: uppercase !important;
    letter-spacing: 5px !important;
    font-weight: bold !important;
`;

export const TotalPrice = styled(Typography)``;
