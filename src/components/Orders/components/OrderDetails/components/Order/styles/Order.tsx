import { Tooltip } from '@mui/material';
import styled from 'styled-components';

export const OrderContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const OrderHeaderContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const IconContainer = styled(Tooltip)``;

export const OrderInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const OrderInformationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;

export const OrderInfoDetailsContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    padding: 10px;
    margin-top: 12px;
    margin-right: 5px;
`;

export const ClientInfoDetailsContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    padding: 10px;
    margin-top: 12px;
    margin-left: 5px;
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    height: 30vh;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    align-items: center;
    padding: 20px 10px;
    margin-top: 12px;
    overflow-y: auto;
`;

export const PropertyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;
