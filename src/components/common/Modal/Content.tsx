import styled from 'styled-components';

const Content = styled.div`
  min-width: 320px;
  min-height: 220px;
  max-width: 90vw;
  max-height: 90vh;
  padding: 2rem;
  border-radius: ${(props) => props.theme.modal?.borderRadius || '20px'};
  background: ${(props) => props.theme.modal?.background || props.theme.sidebar.background};
  backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  -webkit-backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  border: ${(props) => props.theme.sidebar.border || '1px solid rgba(255,255,255,0.1)'};
  box-shadow: ${(props) => props.theme.modal?.boxShadow || '0 25px 50px rgba(0,0,0,0.15)'};
  z-index: 9999;
  color: ${(props) => props.theme.sidebar.foreground};
  animation: slideUp 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  overflow: auto;
  
  /* Modern scrollbar for modal content */
  scrollbar-width: thin;
  scrollbar-color: rgba(102, 126, 234, 0.6) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 3px;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;

export default Content;
