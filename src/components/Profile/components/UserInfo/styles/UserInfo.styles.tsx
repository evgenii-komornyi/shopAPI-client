import styled from 'styled-components';

export const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    padding: 5px;
    margin: 20px 5px;
    height: auto;
    justify-content: center;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);

    &:hover {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    }
`;

export const UserInfoFieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 20px 10px;
    border: none;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);
`;

export const Legend = styled.legend`
    background-color: black;
    padding: 3px 25px;
    border: 1px solid white;
    border-radius: 5px;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin: 5px;
    align-items: center;
    justify-content: space-between;
`;
