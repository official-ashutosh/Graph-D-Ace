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
      transform: scale(0.3);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes nodePulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(102, 126, 234, 0.4);
      transform: scale(1);
    }
    50% {
      box-shadow: 0 0 40px rgba(102, 126, 234, 0.8);
      transform: scale(1.05);
    }
  }

  @keyframes nodeGlow {
    0%, 100% {
      filter: brightness(1) drop-shadow(0 0 10px rgba(102, 126, 234, 0.4));
    }
    50% {
      filter: brightness(1.1) drop-shadow(0 0 20px rgba(102, 126, 234, 0.6));
    }
  }
`;

const Container = styled.div.attrs((props: Props) => ({
  size: Math.max(props.zoomPercentage * 88, 60),
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  ${nodeAnimations}
  
  z-index: ${(props) => props.isActive ? 20 : 10};
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
      : props.theme.nodeInactive.border || `3px solid rgba(102, 126, 234, 0.2)`};
  
  backdrop-filter: ${(props) => 
    props.theme.nodeInactive.backdropFilter || 'blur(10px)'};
  -webkit-backdrop-filter: ${(props) => 
    props.theme.nodeInactive.backdropFilter || 'blur(10px)'};
  
  box-shadow: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.glow || '0 0 30px rgba(102, 126, 234, 0.6)'
      : props.theme.nodeInactive.boxShadow || '0 8px 32px rgba(0,0,0,0.1)'};

  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  user-select: none;
  cursor: grab;
  animation: nodeAppear 0.6s cubic-bezier(0.4, 0.0, 0.2, 1);

  /* Perfect hover effects */
  &:hover {
    transform: ${(props) => 
      props.isActive 
        ? 'scale(1.2)' 
        : 'scale(1.15) translateY(-4px)'};
    box-shadow: ${(props) =>
      props.isActive
        ? '0 0 50px rgba(102, 126, 234, 0.9)'
        : '0 16px 48px rgba(0,0,0,0.2)'};
    z-index: 25;
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.95);
    transition: transform 0.1s ease;
  }

  /* Perfect active state animations */
  ${(props) => props.isActive && css`
    animation: nodePulse 2s ease-in-out infinite;
    transform: scale(1.1);
    
    &::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      border-radius: 50%;
      background: linear-gradient(45deg, transparent, rgba(102, 126, 234, 0.3), transparent);
      z-index: -1;
      animation: nodeGlow 2s ease-in-out infinite;
    }
  `}

  /* Performance optimizations */
  will-change: transform, box-shadow;
  transform-origin: center;
  backface-visibility: hidden;

  /* Perfect responsive sizing */
  @media (max-width: 768px) {
    font-size: ${(props) => `${Math.max(props.size / 3.5, 14)}px`};
  }

  @media (max-width: 550px) {
    font-size: ${(props) => `${Math.max(props.size / 4, 12)}px`};
  }
`;

export default Container;
