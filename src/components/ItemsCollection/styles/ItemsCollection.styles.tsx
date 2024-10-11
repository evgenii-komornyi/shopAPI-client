import styled from 'styled-components';
import { Card } from '@mui/material';

export const ItemContainer = styled(Card)`
    && {
        box-shadow: 0 0 10px rgba(242, 125, 12, 0.4);
        transition: box-shadow 0.5s ease-in;
        position: relative;
    }

    &:hover {
        && {
            box-shadow: 0 0 5px rgba(242, 125, 12, 0.2);
            transition: box-shadow 0.5s ease-in;
            cursor: pointer;
        }
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    padding: 20px 50px;
    font-size: 26px;
`;

export const RegularPrice = styled.div`
    text-decoration: line-through;
    color: rebeccapurple;
    font-weight: bold;
`;

export const ActualPrice = styled.div`
    font-weight: bolder;
`;

export const OutOfStockContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
`;

export const OutOfStockLabel = styled.h1`
    color: #ff0000;
    transform: rotate(-45deg);
    text-transform: uppercase;
`;

export const ControlContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    padding: 5px;
`;
