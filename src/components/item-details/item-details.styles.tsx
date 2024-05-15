import styled from 'styled-components';

export const DetailsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

export const MainInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

export const PriceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    border-bottom: 2px solid #fff;
    padding: 30px 5px;
`;

export const RegularPrice = styled.div`
    text-decoration: line-through;
    color: rebeccapurple;
    font-weight: bold;
`;

export const ActualPrice = styled.div`
    font-weight: bolder;
`;

export const SavePrice = styled.div`
    align-content: center;
    color: rebeccapurple;
`;

export const AdditionalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`;

export const Description = styled.p`
    line-height: 1.5;
`;

export const OutOfStockContainer = styled.div`
    width: 95%;
    margin: 20px 0;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    align-self: center;
    padding: 10px 0;
    border: 1px solid white;
    background-color: rgba(255, 255, 255, 0.4);
    color: white;
    text-shadow: 1px 1px rgba(0, 0, 0, 1);
    text-align: center;
`;
