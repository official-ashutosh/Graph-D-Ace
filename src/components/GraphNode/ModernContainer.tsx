import styled, { css } from 'styled-components';
import Theme from '../../models/Theme';
import Position from '../../models/Position';

interface Props {
  theme: Theme;
  isActive: boolean;
  position: Position;
  zoomPercentage: number;
}

const nodeAnimations = css`
  @keyframes nodeAppear {
    from {
      opacity: 0;
      transform: scale(0.3) rotate(-180deg);
    }
    to {
      opacity: 1;
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes nodePulse {
    0%, 100% {
      transform: scale(1);
      filter: brightness(1);
    }
    50% {
      transform: scale(1.08);
      filter: brightness(1.2);
    }
  }

  @keyframes nodeGlow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(79, 172, 254, 0.4);
    }
    50% {
      box-shadow: 0 0 35px rgba(79, 172, 254, 0.8);
    }
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

const Container = styled.div.attrs((props: Props) => ({
  size: Math.max(props.zoomPercentage * 85, 55),
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  ${nodeAnimations}
  
  z-index: ${(props) => props.isActive ? 25 : 15};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => `${Math.max(props.size / 3, 16)}px`};
  font-weight: 700;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  box-sizing: border-box;
  
  background: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.background
      : props.theme.nodeInactive.background};

  color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.foreground
      : props.theme.nodeInactive.foreground};

  border-radius: 50%;
  border: ${(props) => 
    props.isActive 
      ? '3px solid transparent'
      : props.theme.nodeInactive.border};
  
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  
  box-shadow: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.glow
      : props.theme.nodeInactive.boxShadow};

  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  cursor: grab;
  animation: nodeAppear 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  /* Modern 3D hover effects */
  &:hover {
    transform: ${(props) => 
      props.isActive 
        ? 'scale(1.25) translateY(-8px)' 
        : 'scale(1.2) translateY(-6px)'};
    box-shadow: ${(props) =>
      props.isActive
        ? '0 0 50px rgba(79, 172, 254, 0.9), 0 20px 40px rgba(0, 0, 0, 0.2)'
        : '0 0 30px rgba(79, 172, 254, 0.5), 0 15px 30px rgba(0, 0, 0, 0.15)'};
    z-index: 30;
    filter: brightness(1.1);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  /* Active state with enhanced animations */
  ${(props) => props.isActive && css`
    animation: nodePulse 2s ease-in-out infinite, nodeGlow 2s ease-in-out infinite;
    transform: scale(1.1);
    
    &::before {
      content: '';
      position: absolute;
      top: -12px;
      left: -12px;
      right: -12px;
      bottom: -12px;
      border-radius: 50%;
      background: linear-gradient(45deg, transparent, rgba(79, 172, 254, 0.3), transparent);
      z-index: -1;
      animation: float 3s ease-in-out infinite;
    }

    &::after {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
      z-index: -1;
      animation: nodeGlow 2s ease-in-out infinite reverse;
    }
  `}

  /* Modern glassmorphism effect for inactive nodes */
  ${(props) => !props.isActive && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
      border-radius: 50%;
      z-index: -1;
      transition: all 0.3s ease;
    }

    &:hover::before {
      background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
      transform: scale(1.1);
    }
  `}

  /* Performance optimizations */
  will-change: transform, box-shadow, filter;
  transform-origin: center;
  backface-visibility: hidden;

  /* Responsive sizing */
  @media (max-width: 768px) {
    font-size: ${(props) => `${Math.max(props.size / 3.5, 14)}px`};
  }

  @media (max-width: 550px) {
    font-size: ${(props) => `${Math.max(props.size / 4, 12)}px`};
  }
`;

export default Container;
