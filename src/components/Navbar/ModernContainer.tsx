import styled, { css } from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const slideInAnimation = css`
  @keyframes slideInFromTop {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Container = styled.div<Props>`
  ${slideInAnimation}
  z-index: 1000;
  position: relative;
  width: 100%;
  height: 74px;
  display: grid;
  grid-template-columns: 220px 1fr 260px;
  align-items: center;
  background: ${(props) => props.theme.navbar.background};
  color: ${(props) => props.theme.navbar.foreground};
  backdrop-filter: ${(props) => props.theme.navbar.backdropFilter};
  -webkit-backdrop-filter: ${(props) => props.theme.navbar.backdropFilter};
  border-bottom: ${(props) => props.theme.navbar.borderBottom};
  box-shadow: ${(props) => props.theme.navbar.boxShadow};
  padding: 0 2.5rem;
  transition: ${(props) => props.theme.animations?.transition || 'all 0.3s ease'};
  animation: slideInFromTop 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  /* Modern glassmorphism overlay */
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

  /* Responsive design */
  @media (max-width: 1024px) {
    padding: 0 1.2rem;
    grid-template-columns: 160px 1fr 180px;
    height: 62px;
  }

  @media (max-width: 768px) {
    height: 56px;
    padding: 0 0.5rem;
    grid-template-columns: 110px 1fr 120px;
  }

  @media (max-width: 550px) {
    height: 48px;
    padding: 0 0.2rem;
    grid-template-columns: 70px 1fr 70px;
  }
`;

export default Container;
