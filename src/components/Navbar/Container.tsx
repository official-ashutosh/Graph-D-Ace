import styled from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  z-index: 1000;
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
  border-bottom: ${(props) => props.theme.navbar.borderBottom};
  box-shadow: ${(props) => props.theme.navbar.boxShadow};
  padding: 0 2rem;
  transition: all 0.2s ease;

  @media (max-width: 768px) {
    height: 50px;
    padding: 0 1rem;
  }

  @media (max-width: 550px) {
    height: 50px;
    padding: 0 1rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export default Container;
