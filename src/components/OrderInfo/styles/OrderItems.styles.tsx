import styled from 'styled-components';

export const OrderItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    width: 100%;
`;

export const ImageContainer = styled.div`
    width: 70px;
    height: 70px;
    padding: 2px;
    border-radius: 10px;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.2);
    position: relative;
`;

export const QuantityContainer = styled.div`
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 5px;
    width: 25px;
    height: 25px;
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);
    position: absolute;
    right: -5px;
    top: -5px;
    background-color: rgba(0, 0, 0, 0.6);
`;

export const Quantity = styled.h5``;

export const Image = styled.img`
    border-radius: 10px;
    width: 100%;
    height: 100%;
`;

export const OrderItemNameSexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    width: 60%;
`;

export const OrderItemNameSexText = styled.p`
    font-size: 12px !important;
`;

export const OrderItemActualPriceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 10px;
`;

export const OrderItemActualPrice = styled.h4`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;
