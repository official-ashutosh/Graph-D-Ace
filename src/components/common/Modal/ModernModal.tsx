import styled, { css } from 'styled-components';

const modalAnimations = css`
  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(100px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes backdropFadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(20px);
    }
  }

  @keyframes modalFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

const Container = styled.div`
  ${modalAnimations}
  
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  
  background: ${(props) => props.theme.modal?.backdrop || 'rgba(0, 0, 0, 0.6)'};
  backdrop-filter: ${(props) => props.theme.modal?.backdropFilter || 'blur(20px)'};
  -webkit-backdrop-filter: ${(props) => props.theme.modal?.backdropFilter || 'blur(20px)'};
  
  animation: backdropFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Modern gradient overlay */
  background-image: 
    radial-gradient(circle at 30% 40%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 70% 60%, rgba(0, 242, 254, 0.1) 0%, transparent 50%);
`;

const Content = styled.div`
  min-width: 350px;
  min-height: 250px;
  max-width: 90vw;
  max-height: 90vh;
  padding: 2.5rem;
  border-radius: ${(props) => props.theme.modal?.borderRadius || '20px'};
  background: ${(props) => props.theme.modal?.background || props.theme.sidebar.background};
  backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  -webkit-backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  border: ${(props) => props.theme.sidebar.border || '1px solid rgba(255,255,255,0.2)'};
  box-shadow: ${(props) => props.theme.modal?.boxShadow || '0 25px 60px rgba(0,0,0,0.15)'};
  z-index: 9999;
  color: ${(props) => props.theme.sidebar.foreground};
  
  animation: modalSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1), modalFloat 6s ease-in-out infinite 2s;
  overflow: auto;
  position: relative;
  
  /* Modern glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    backdrop-filter: blur(20px);
    pointer-events: none;
    z-index: -1;
    border-radius: inherit;
  }

  /* Beautiful border glow */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.5), rgba(0, 242, 254, 0.5));
    border-radius: inherit;
    z-index: -2;
    filter: blur(8px);
    opacity: 0.6;
  }
  
  /* Modern scrollbar for modal content */
  scrollbar-width: thin;
  scrollbar-color: rgba(79, 172, 254, 0.6) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border-radius: 3px;
    transition: all 0.3s ease;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #00f2fe, #4facfe);
    transform: scaleY(1.2);
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 35px 80px rgba(0,0,0,0.2), 0 0 40px rgba(79, 172, 254, 0.3);
  }
`;

export { Container, Content };
