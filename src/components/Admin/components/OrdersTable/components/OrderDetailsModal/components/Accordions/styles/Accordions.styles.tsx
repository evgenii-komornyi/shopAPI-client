import styled from 'styled-components';

export const WrapperContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`;

export const PropertyContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
`;

export const ItemWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    overflow-y: visible;
    padding: 20px;
`;

export const ItemContainer = styled.div`
    overflow-y: visible;
`;

export const ItemHeader = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    font-weight: bold;
    align-items: center;
    justify-items: center;
    border-bottom: 2px solid #ccc;
    padding: 10px 0;
`;

export const ItemRow = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(4, 1fr);
    align-items: center;
    justify-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
    position: relative;
`;

export const HoverImage = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
    top: -20px;
    left: -50px;
    visibility: hidden;
    opacity: 0;
    transition:
        visibility 0s,
        opacity 0.2s linear;
`;

export const ImageContainer = styled.div`
    position: relative;

    &:hover ${HoverImage} {
        visibility: visible;
        opacity: 1;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
`;
