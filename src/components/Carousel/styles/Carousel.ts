import styled, { keyframes } from 'styled-components';
import { IconButton } from '@mui/material';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

export const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    overflow: hidden;
    margin: 20px 10px;
`;

export const Slide = styled.div<{ $isActive: boolean; $image: string }>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    animation: ${({ $isActive }) => ($isActive ? fadeIn : fadeOut)} 1s forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 1s ease;
    background-image: url(${({ $image }) => $image});
    background-size: cover;
    background-position: center;
`;

export const Text = styled.h2`
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.7);
`;

export const Controls = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    transform: translateY(-50%);
`;

export const PrevButton = styled(IconButton)`
    left: 10px;
`;

export const NextButton = styled(IconButton)`
    right: 30px;
`;
