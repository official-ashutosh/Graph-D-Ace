import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const StyledSideNav = styled.div<Props>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 60px);
  width: 300px;
  top: 60px;
  z-index: 999;
  left: ${(props) => (props.isVisible ? '10px' : '-320px')};
  background: ${(props) => props.theme.sidebar.background};
  border: ${(props) => props.theme.sidebar.border};
  border-radius: ${(props) => props.theme.sidebar.borderRadius};
  box-shadow: ${(props) => props.theme.sidebar.boxShadow};
  overflow-y: auto;
  transition: all 0.3s ease;

  /* Clean scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f5f9;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: calc(100vh - 50px);
    top: 50px;
    left: ${(props) => (props.isVisible ? '5px' : '-300px')};
  }

  @media (max-width: 550px) {
    width: calc(100vw - 20px);
    height: calc(100vh - 50px);
    top: 50px;
    left: ${(props) => (props.isVisible ? '10px' : '-100vw')};
  }
`;

export default StyledSideNav;
