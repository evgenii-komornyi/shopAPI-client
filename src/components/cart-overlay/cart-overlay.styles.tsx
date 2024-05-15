import styled from 'styled-components';
import { Button, Typography } from '@mui/material';

export const CartOverlayContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: inset 0 0 10px rgba(242, 125, 12, 0.4);
    padding: 25px 5px;
`;

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1;
    letter-spacing: 3px;
`;

export const CartItemsContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 50vh;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex: 5;
    border-bottom: 1px solid white;
    border-top: 1px solid white;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    transition: box-shadow 0.5s ease-in;

    &:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        transition: box-shadow 0.5s ease-in;
    }
`;

export const CartFooterContainer = styled.div`
    display: flex;
    flex: 2;
    position: relative;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const CartFooterPriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px 50px;
    margin-top: 10px;
    box-shadow:
        0 -5px 3px -3px rgba(255, 255, 255, 0.4),
        0 5px 3px -3px rgba(255, 255, 255, 0.4);
`;

export const CartPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const CartTotalPriceText = styled(Typography)`
    font-size: 12px !important;
    font-weight: bold !important;
    letter-spacing: 3px !important;
    text-transform: uppercase !important;
`;

export const CartTotalPrice = styled(Typography)`
    font-size: 2rem !important;
    font-weight: bold !important;
`;

export const CartSavedPriceText = styled(Typography)`
    font-size: 12px !important;
    font-weight: bold !important;
    letter-spacing: 3px !important;
    text-transform: uppercase !important;
`;

export const CartSavedPrice = styled(Typography)`
    font-size: 2rem !important;
    font-weight: bold !important;
`;

export const CartFooterButtonsContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 10px;
    width: 100%;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px;
`;

const CustomButton = styled(Button)`
    width: 48% !important;
    height: 70px !important;
    border: 1px solid white !important;
    color: white !important;
    letter-spacing: 3px !important;
`;

export const CartCheckoutButton = styled(CustomButton)`
    background-color: white !important;
    color: black !important;
    font-weight: bold !important;

    &:hover {
        background-color: black !important;
        color: white !important;
    }
`;

export const CartClearButton = styled(CustomButton)`
    &:hover {
        background-color: transparent !important;
        box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.5) !important;
    }
`;
