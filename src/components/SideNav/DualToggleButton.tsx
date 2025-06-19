import styled, { css } from 'styled-components';

interface Props {
  isVisible: boolean;
  side: 'left' | 'right';
  onClick: () => void;
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

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: ${(props: Props) => 
        props.side === 'left' ? 'translateX(-20px)' : 'translateX(20px)'};
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const DualToggleButton = styled.div<Props>`
  ${toggleAnimations}
  
  position: fixed;
  top: 100px;
  z-index: 1001;
  
  ${(props) => props.side === 'left' 
    ? css`
        left: ${props.isVisible ? '340px' : '10px'}; /* Adjust for no margin sidebar */
      `
    : css`
        right: ${props.isVisible ? '340px' : '10px'}; /* Adjust for no margin sidebar */
      `
  }
  
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${(props) => 
    props.side === 'left' 
      ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      : 'linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%)'
  };
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) => 
    props.side === 'left' 
      ? '0 8px 25px rgba(79, 172, 254, 0.4)'
      : '0 8px 25px rgba(255, 107, 107, 0.4)'
  };
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

  /* Icon based on side and state */
  &::after {
    content: ${(props) => {
      if (props.side === 'left') {
        return props.isVisible ? '"⚙️"' : '"🎛️"';
      } else {
        return props.isVisible ? '"📊"' : '"🧠"';
      }
    }};
    font-size: 20px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-4px) scale(1.1);
    animation: togglePulse 2s ease-in-out infinite;
    background: ${(props) => 
      props.side === 'left' 
        ? 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)'
        : 'linear-gradient(135deg, #ff8e53 0%, #ff6b6b 100%)'
    };
  }

  &:active {
    transform: translateY(-2px) scale(1.05);
  }

  /* Responsive positioning */
  @media (max-width: 1200px) {
    ${(props) => props.side === 'left' 
      ? css`left: ${props.isVisible ? '315px' : '10px'};`
      : css`right: ${props.isVisible ? '315px' : '10px'};`
    }
  }

  @media (max-width: 768px) {
    top: 75px;
    width: 45px;
    height: 45px;
    ${(props) => props.side === 'left' 
      ? css`left: ${props.isVisible ? '293px' : '8px'};`
      : css`right: ${props.isVisible ? '293px' : '8px'};`
    }
    
    &::after {
      font-size: 18px;
    }
  }

  @media (max-width: 550px) {
    ${(props) => props.side === 'left' 
      ? css`left: ${props.isVisible ? 'calc(100vw - 60px)' : '8px'};`
      : css`right: ${props.isVisible ? 'calc(100vw - 60px)' : '8px'};`
    }
  }
`;

export default DualToggleButton;
