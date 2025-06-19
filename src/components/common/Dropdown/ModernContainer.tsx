import styled, { css } from 'styled-components';

interface Props {
  isOpen: boolean;
}

const slideDown = css`
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

const Container = styled.div<Props>`
  ${slideDown}
  
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 1000;
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  -webkit-backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  border: ${(props) => props.theme.sidebar.border};
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 
              0 0 30px rgba(79, 172, 254, 0.1);
  
  overflow: hidden;
  max-height: ${(props) => props.isOpen ? '300px' : '0'};
  opacity: ${(props) => props.isOpen ? '1' : '0'};
  transform: ${(props) => props.isOpen ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.95)'};
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${(props) => props.isOpen ? 'slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};

  /* Modern glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    pointer-events: none;
    z-index: -1;
    border-radius: inherit;
  }

  /* Custom scrollbar for dropdown content */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(79, 172, 254, 0.6) transparent;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border-radius: 2px;
  }
`;

export default Container;
