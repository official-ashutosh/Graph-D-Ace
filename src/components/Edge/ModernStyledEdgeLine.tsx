import styled, { css, keyframes } from 'styled-components';

interface Props {
  stroke: string;
  strokeWidth: number;
  isActive: boolean;
  animated?: boolean;
}

const flowAnimation = keyframes`
  0% {
    stroke-dashoffset: 20;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 5px rgba(79, 172, 254, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(79, 172, 254, 0.9));
  }
`;

const StyledEdgeLine = styled.line<Props>`
  stroke: ${(props) => props.stroke};
  stroke-width: ${(props) => props.strokeWidth}px;
  fill: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  /* Modern stroke styling */
  stroke-linecap: round;
  stroke-linejoin: round;
  
  /* Animated flow effect */
  ${(props) => props.animated && css`
    stroke-dasharray: 8 4;
    animation: ${flowAnimation} 1.5s linear infinite;
  `}
  
  /* Active state with glow */
  ${(props) => props.isActive && css`
    stroke: #4facfe;
    stroke-width: ${props.strokeWidth + 2}px;
    animation: ${pulseGlow} 2s ease-in-out infinite, 
               ${flowAnimation} 1s linear infinite;
    filter: drop-shadow(0 0 10px rgba(79, 172, 254, 0.7));
  `}

  /* Hover effects */
  &:hover {
    stroke: ${(props) => props.isActive ? '#00f2fe' : '#4facfe'};
    stroke-width: ${(props) => props.strokeWidth + 1}px;
    filter: drop-shadow(0 0 8px rgba(79, 172, 254, 0.6));
    transform-origin: center;
  }

  /* Performance optimizations */
  will-change: stroke, stroke-width, filter;
  vector-effect: non-scaling-stroke;
`;

export default StyledEdgeLine;
