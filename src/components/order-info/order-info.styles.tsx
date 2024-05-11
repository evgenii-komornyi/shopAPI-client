import styled from 'styled-components';

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    padding: 20px 10px;
`;

export const ThankYouTitle = styled.h1`
    font-size: 48px;
    letter-spacing: 4px;
`;

export const OrderNumberText = styled.h3`
    font-size: 32px;
    text-align: center;
    letter-spacing: 4px;
`;

export const TotalPriceText = styled.h5`
    font-size: 28px;
    letter-spacing: 4px;
`;

export const OrderItemsContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    height: 100%;
    padding: 20px 10px;
    margin-top: 20px;
`;

export const ItemsContainer = styled.div`
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
