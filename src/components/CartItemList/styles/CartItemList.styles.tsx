import styled from 'styled-components';
import { Typography } from '@mui/material';

export const CartItemContainer = styled.div`
    width: 100%;
    height: 170px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    padding: 10px;
    margin: 10px auto;
    transition: box-shadow 0.2s ease-in;

    &:hover {
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        transition: box-shadow 0.2s ease-in;
    }
`;

export const CartItemInfoContainer = styled.div`
    padding: 5px;
`;

export const CartItemNameSexText = styled(Typography)`
    && {
        font-size: 12px;
        text-align: center;
    }
`;

export const CartItemImagePriceButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
`;

export const CartItemImageContainer = styled.div`
    flex: 2;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`;

export const CartItemImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const CartItemPriceContainer = styled.div`
    flex: 2.5;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`;

export const CartItemRegularPrice = styled(Typography)`
    && {
        text-align: center;
        margin-bottom: 10px;
        text-decoration: line-through;
        font-weight: bold;
    }
`;

export const CartItemActualPrice = styled(Typography)`
    && {
        text-align: center;
    }
`;

export const CartItemQuantityContainer = styled.div`
    flex: 3;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
`;
