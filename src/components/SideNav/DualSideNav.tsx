import styled, { css } from 'styled-components';

interface Props {
  isVisible: boolean;
  side: 'left' | 'right';
}

const slideAnimation = css`
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-100%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(100%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }
`;

const DualSideNav = styled.div<Props>`
  ${slideAnimation}
  
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 140px); /* Space for navbar and footer */
  width: 340px;
  top: 80px;
  bottom: 60px; /* Space for footer */
  z-index: 999;
    ${(props) => props.side === 'left' 
    ? css`
        left: ${props.isVisible ? '15px' : '-360px'};
        animation: ${props.isVisible ? 'slideInFromLeft' : 'none'} 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      `
    : css`
        right: ${props.isVisible ? '15px' : '-360px'};
        animation: ${props.isVisible ? 'slideInFromRight' : 'none'} 0.6s cubic-bezier(0.4, 0, 0.2, 1);
      `
  }
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter};
  -webkit-backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter};
  border: ${(props) => props.theme.sidebar.border};
  border-radius: ${(props) => props.theme.sidebar.borderRadius};
  box-shadow: ${(props) => props.theme.sidebar.boxShadow};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* Modern glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02));
    backdrop-filter: blur(20px);
    pointer-events: none;
    z-index: -1;
    border-radius: inherit;
  }

  /* Modern scrollbar */
  scrollbar-color: rgba(79, 172, 254, 0.6) transparent;
  scrollbar-width: thin;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.6), rgba(0, 242, 254, 0.6));
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    transform: scaleY(1.2);
  }

  /* Hover effect for entire sidebar */
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(props) => props.theme.sidebar.boxShadow}, 0 0 25px rgba(79, 172, 254, 0.15);
  }
  /* Responsive design */
  @media (max-width: 1200px) {
    width: 320px;
    ${(props) => props.side === 'left' 
      ? css`left: ${props.isVisible ? '0px' : '-335px'};`
      : css`right: ${props.isVisible ? '0px' : '-335px'};`
    }
  }

  @media (max-width: 768px) {
    width: 300px;
    height: calc(100vh - 120px);
    top: 60px;
    ${(props) => props.side === 'left' 
      ? css`left: ${props.isVisible ? '0px' : '-315px'};`
      : css`right: ${props.isVisible ? '0px' : '-315px'};`
    }
  }

  @media (max-width: 550px) {
    width: calc(100vw - 10px);
    height: calc(100vh - 120px);
    top: 60px;
    ${(props) => props.side === 'left' 
      ? css`left: ${props.isVisible ? '5px' : '-100vw'};`
      : css`right: ${props.isVisible ? '5px' : '-100vw'};`
    }
    border-radius: 12px;
  }
`;

export default DualSideNav;
