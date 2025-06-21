import styled, { css } from 'styled-components';

interface Props {
  isVisualizing: boolean;
}

const buttonAnimations = css`
  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 8px 30px rgba(79, 172, 254, 0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 12px 40px rgba(79, 172, 254, 0.7);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(100px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes glow {
    0%, 100% {
      filter: brightness(1) drop-shadow(0 0 10px rgba(79, 172, 254, 0.4));
    }
    50% {
      filter: brightness(1.2) drop-shadow(0 0 20px rgba(79, 172, 254, 0.8));
    }
  }
`;

const Container = styled.div<Props>`
  ${buttonAnimations}
  
  z-index: 1000;
  position: fixed;
  right: 25px;
  bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 55px;
  border-radius: 28px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  background: ${(props) =>
    props.isVisualizing 
      ? 'linear-gradient(135deg, #ff6b6b, #ff8e53)' 
      : props.theme.button?.primary || 'linear-gradient(135deg, #4facfe, #00f2fe)'};
  
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  
  box-shadow: ${(props) =>
    props.isVisualizing 
      ? '0 8px 40px rgba(255, 107, 107, 0.6)' 
      : '0 8px 40px rgba(79, 172, 254, 0.5)'};
  
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  cursor: pointer;
  animation: ${(props) => props.isVisualizing ? 'pulse' : 'slideUp'} 
    ${(props) => props.isVisualizing ? '2s' : '0.8s'} 
    ${(props) => props.isVisualizing ? 'infinite' : 'cubic-bezier(0.4, 0, 0.2, 1)'};

  /* Shimmer effect when not visualizing */
  ${(props) => !props.isVisualizing && css`
    background-image: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 70%
    );
    background-size: 400% 100%;
    
    &:hover {
      animation: shimmer 1.5s ease-in-out infinite, glow 2s ease-in-out infinite;
    }
  `}

  /* Enhanced hover effects */
  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: ${(props) =>
      props.isVisualizing 
        ? '0 20px 60px rgba(255, 107, 107, 0.8)' 
        : '0 20px 60px rgba(79, 172, 254, 0.7)'};
    letter-spacing: 1.5px;
  }

  &:active {
    transform: translateY(-4px) scale(1.02);
    transition: transform 0.1s ease;
  }

  /* Modern glassmorphism overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;
  }

  /* Shine effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    border-radius: inherit;
    transition: left 0.6s ease;
  }

  &:hover::after {
    left: 100%;
  }

  /* Make sure button is visible and clickable */
  opacity: 1 !important;
  visibility: visible !important;
  pointer-events: auto !important;

  /* Responsive design */
  @media (max-width: 1024px) {
    width: 160px;
    height: 50px;
    font-size: 14px;
    right: 20px;
    bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 45px;
    font-size: 13px;
    right: 15px;
    bottom: 15px;
  }

  @media (max-width: 550px) {
    width: 120px;
    height: 40px;
    font-size: 12px;
    right: 10px;
    bottom: 10px;
    letter-spacing: 0.5px;
  }
`;

export default Container;
