import styled, { css } from 'styled-components';

interface Props {
  isVisible: boolean;
}

const toggleAnimations = css`
  @keyframes togglePulse {
    0%, 100% {
      box-shadow: 0 0 20px rgba(79, 172, 254, 0.4);
    }
    50% {
      box-shadow: 0 0 35px rgba(79, 172, 254, 0.7);
    }
  }

  @keyframes hamburgerRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ModernToggleButton = styled.div<Props>`
  ${toggleAnimations}
  
  position: fixed;
  top: 85px;
  left: ${(props) => props.isVisible ? '370px' : '15px'};
  z-index: 1001;
  
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
  animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  /* Modern glassmorphism overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;
  }

  /* Hamburger Icon */
  &::after {
    content: '';
    width: 20px;
    height: 2px;
    background: white;
    border-radius: 1px;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
      0 -6px 0 white,
      0 6px 0 white;
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-4px) scale(1.1);
    animation: togglePulse 2s ease-in-out infinite;
    background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  /* Transform icon when sidebar is visible */
  ${(props) => props.isVisible && css`
    &::after {
      transform: rotate(45deg);
      box-shadow: 
        0 0 0 white,
        0 0 0 white;
    }
    
    &::before {
      content: '';
      position: absolute;
      width: 20px;
      height: 2px;
      background: white;
      transform: rotate(-45deg);
      border-radius: 1px;
    }
  `}

  /* Responsive positioning */
  @media (max-width: 1200px) {
    left: ${(props) => props.isVisible ? '340px' : '10px'};
  }

  @media (max-width: 768px) {
    top: 75px;
    width: 45px;
    height: 45px;
    left: ${(props) => props.isVisible ? '318px' : '8px'};
  }

  @media (max-width: 550px) {
    left: ${(props) => props.isVisible ? 'calc(100vw - 60px)' : '8px'};
  }
`;

export default ModernToggleButton;
