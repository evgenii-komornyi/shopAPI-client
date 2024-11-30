import { Typography } from '@mui/material';
import styled, { css, RuleSet, keyframes } from 'styled-components';

const l37 = keyframes`
  80%, 100% {
    background-position: bottom right, bottom left, bottom, top;
  }
`;

export const Loader = styled.div`
    width: 100px;
    aspect-ratio: 1.154;
    --c: #0000, #fff 2deg 59deg, #0000 61deg;
    --c1: conic-gradient(from 149deg at top, var(--c));
    --c2: conic-gradient(from -31deg at bottom, var(--c));

    background:
        var(--c1) top,
        var(--c1) bottom right,
        var(--c2) bottom,
        var(--c1) bottom left;

    background-size: 50% 50%;
    background-repeat: no-repeat;
    animation: ${l37} 1s infinite;
`;

export const OrdersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70vh;
    padding: 5px;
`;

const containerStyle: RuleSet<object> = css`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    height: 70vh;
    border: 1px solid #fff;
    border-radius: 10px;
    align-items: center;
    overflow-y: auto;
`;

const applyPlacement = (isNotEmpty: boolean): RuleSet<object> => css`
    justify-content: ${isNotEmpty ? 'flex-start' : 'center'};
`;

export const OrderListContainer = styled.div<{ $hasOrders: boolean }>`
    width: 30%;
    margin-right: 20px;
    padding: 10px;
    ${({ $hasOrders }) => applyPlacement($hasOrders)};
    ${containerStyle};
`;

export const OrderDetailsContainer = styled.div<{ $wasOrderLoaded: boolean }>`
    width: 70%;
    padding: 10px;
    ${({ $wasOrderLoaded }) => applyPlacement($wasOrderLoaded)}
    ${containerStyle}
`;

const applyActiveStyle = (type: 'div' | 'span'): RuleSet<object> => {
    if (type === 'div') {
        return css`
            &::before,
            &::after {
                width: 100%;
            }
        `;
    } else {
        return css`
            &::before,
            &::after {
                height: 100%;
            }
        `;
    }
};

export const OrderContainer = styled.div<{ $isActive?: boolean }>`
    display: inline-block;
    position: relative;
    width: 100%;
    text-align: center;
    background: rgba(0, 0, 0, 0.09);
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: #fff;
    cursor: pointer;
    margin: 2px 0;
    overflow: hidden;
    border-radius: 4px;

    &::before,
    &::after {
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        transition: all 0.2s linear;
        background: #fff;
        border: none;
        border-radius: 4px;
    }

    &::before {
        left: 0;
        top: 0;
        transition-duration: 0.4s;
    }

    &::after {
        right: 0;
        bottom: 0;
        transition-duration: 0.4s;
    }

    &:hover::before,
    &:hover::after {
        width: 100%;
    }

    ${({ $isActive }) => $isActive && applyActiveStyle('div')}
`;

export const StatusContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 10px;
    letter-spacing: 2px;
`;

export const OrderSpan = styled.span<{ $isActive?: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    position: relative;
    background: rgba(0, 0, 0, 0.09);
    border-radius: 4px;

    &::before,
    &::after {
        content: '';
        width: 2px;
        height: 0;
        position: absolute;
        transition: all 0.2s linear;
        background: #fff;
        border: none;
        border-radius: 4px;
    }

    &::before {
        left: 0;
        top: 0;
        transition-duration: 0.4s;
    }

    &::after {
        right: 0;
        bottom: 0;
        transition-duration: 0.4s;
    }

    &:hover::before,
    &:hover::after {
        height: 100%;
    }

    ${({ $isActive }) => $isActive && applyActiveStyle('span')}
`;

export const OrderDate = styled(Typography)`
    && {
        font-weight: bolder;
    }
`;
