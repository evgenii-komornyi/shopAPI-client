import styled from 'styled-components';

export const ProfileMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 5px;
    margin: 20px 0;
    height: auto;
    justify-content: space-between;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5);

    &:hover {
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.4);
    }
`;
