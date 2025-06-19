import styled, { css } from 'styled-components';

interface Props {
  isVisible: boolean;
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

  @keyframes slideOutToLeft {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-100%) scale(0.95);
    }
  }
`;

const StyledSideNav = styled.div<Props>`
  ${slideAnimation}
  
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 70px);
  width: 340px;
  top: 70px;
  z-index: 999;
  left: ${(props) => (props.isVisible ? '15px' : '-365px')};
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter};
  -webkit-backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter};
  border: ${(props) => props.theme.sidebar.border};
  border-radius: ${(props) => props.theme.sidebar.borderRadius};
  box-shadow: ${(props) => props.theme.sidebar.boxShadow};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${(props) => props.isVisible ? 'slideInFromLeft' : 'slideOutToLeft'} 0.6s cubic-bezier(0.4, 0, 0.2, 1);

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
    left: ${(props) => (props.isVisible ? '10px' : '-340px')};
  }

  @media (max-width: 768px) {
    width: 300px;
    height: calc(100vh - 60px);
    top: 60px;
    left: ${(props) => (props.isVisible ? '8px' : '-320px')};
  }

  @media (max-width: 550px) {
    width: calc(100vw - 20px);
    height: calc(100vh - 60px);
    top: 60px;
    left: ${(props) => (props.isVisible ? '10px' : '-100vw')};
    border-radius: 12px;
  }
`;

export default StyledSideNav;
