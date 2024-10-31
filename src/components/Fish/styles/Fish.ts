import styled, { keyframes } from 'styled-components';

const swim = keyframes`
    0% { transform: translateX(0) rotate(-5deg) scaleX(1); }
    15% { transform: translateX(-30px) rotate(-3deg) scaleX(1); } /* Start moving left smoothly */
    30% { transform: translateX(-60px) rotate(0deg) scaleX(1); } /* Slightly further left */
    45% { transform: translateX(-100px) rotate(5deg) scaleX(-1); } /* Move fully left and flip */
    55% { transform: translateX(-70px) rotate(3deg) scaleX(-1); } /* Smoothly back from left edge */
    70% { transform: translateX(-30px) rotate(0deg) scaleX(-1); } /* Continue back to center */
    85% { transform: translateX(30px) rotate(-3deg) scaleX(-1); } /* Move to the right */
    100% { transform: translateX(0) rotate(-5deg) scaleX(1); } /* Return to start */
`;

const tailWave = keyframes`
    0%, 100% { transform: translateY(-50%) rotate(20deg); }
    50% { transform: translateY(-50%) rotate(10deg); }
`;

const vibrateZ = keyframes`
  0%, 100% { transform: rotateZ(0deg) rotate(20deg); }
  25% { transform: rotateZ(1deg) rotate(20deg); }
  50% { transform: rotateZ(-1deg) rotate(20deg); }
  75% { transform: rotateZ(0.5deg) rotate(20deg); }
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px; 
    margin: 10px;
`;

export const FishContainer = styled.div`
    position: relative;
    margin-top: 50px;
    width: 150px;
    height: 40px;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 43%, rgba(223,201,110,1) 74%);
    border-radius: 60% 40% 50% 50%;
    transform: rotate(-5deg);
    animation: ${swim} 8s ease-in-out infinite;
`;

export const CrownTail = styled.div`
    position: absolute;
    top: 70%;
    right: -70px;
    width: 90px;
    height: 100px;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 43%, rgba(223,201,110,1) 74%);
    border-radius: 50px 20px 20px 50px;
    transform: translateY(-50%) rotate(20deg);
    animation: ${tailWave} 1.2s ease-in-out infinite;
`;

const swimMovement = keyframes`
    0%, 100% { transform: translateX(0) rotate(90deg); }
    50% { transform: translateX(-2px) rotate(85deg); }
`;

export const Fin1 = styled.div`
    position: absolute;
    top: 52px;
    left: 15px;
    width: 40px;
    height: 10px;
    background-color: #fff;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    opacity: 0.6;
    animation: ${swimMovement} 1.5s ease-in-out infinite;
`;


export const Fin2 = styled.div`
    position: absolute;
    top: 27px;
    left: 30px;
    width: 170px;
    height: 70px;
    background: rgba(223,201,110,1);
    clip-path: polygon(50% 100%, 50% 10%, 10% 50%);
    transform: rotate(20deg);
    animation: ${vibrateZ} 1s infinite ease-in-out;
    opacity: 1;
`;

const vibration = keyframes`
    0%, 100% { transform: rotate(-30deg) translateZ(0); }
    20% { transform: rotate(-30deg) translateZ(2px); }
    40% { transform: rotate(-32deg) translateZ(4px); }
    60% { transform: rotate(-30deg) translateZ(2px); }
    80% { transform: rotate(-28deg) translateZ(4px); }
`;

export const Fin3 = styled.div`
    position: absolute;
    top: -33px;
    left: 50px;
    width: 75px;
    height: 35px;
    background: rgba(223, 201, 110, 1);
    clip-path: polygon(50% 100%, 50% 10%, 10% 50%);
    opacity: 1;
    animation: ${vibration} 1s ease-in-out infinite;
`;

const blink = keyframes`
    0%, 95%, 100% {
        height: 8px; /* Open eye */
    }
    96%, 98% {
        height: 2px; /* Closed eye */
    }
`;

export const Eye = styled.div`
    position: absolute;
    top: 25%;
    left: 15px;
    width: 8px;
    height: 8px;
    background-color: #000;
    border-radius: 50%;
    box-shadow: 1px 1px 0 #000;
    animation: ${blink} 4s ease-in-out infinite;
`;