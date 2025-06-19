import styled, { css } from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const fadeInAnimation = css`
  @keyframes fadeInCanvas {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Container = styled.div<Props>`
  ${fadeInAnimation}
  
  position: relative;
  height: calc(100vh - 80px);
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  background: ${(props) => props.theme.canvas.background || '#f7fafc'};
  transition: all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
  overflow: hidden;
  animation: fadeInCanvas 1s ease-out;
  
  /* Perfect subtle grid pattern */
  background-image: 
    linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;

  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  @media (max-width: 768px) {
    height: calc(100vh - 70px);
    background-size: 40px 40px;
  }
  @media (max-width: 550px) {
    height: calc(100vh - 70px);
    background-size: 30px 30px;
  }
`;

export default Container;
