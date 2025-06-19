import styled from 'styled-components';

const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  background: ${(props) => props.theme.modal?.backdrop || 'rgba(0, 0, 0, 0.5)'};
  transition: opacity 0.3s ease;
`;

export default Container;
