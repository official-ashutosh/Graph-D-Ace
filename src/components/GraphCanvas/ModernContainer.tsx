import styled, { css } from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const fadeInAnimation = css`
  @keyframes fadeInCanvas {
    from {
      opacity: 0;
      transform: scale(0.98);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const Container = styled.div<Props>`
  ${fadeInAnimation}
  
  position: relative;
  height: calc(100vh - 70px);
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  background: ${(props) => props.theme.canvas.background};
  transition: ${(props) => props.theme.animations?.transition || 'all 0.3s ease'};
  overflow: hidden;
  animation: fadeInCanvas 1s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Modern subtle pattern */
  background-image: 
    radial-gradient(circle at 25px 25px, rgba(79, 172, 254, 0.08) 2px, transparent 2px),
    radial-gradient(circle at 75px 75px, rgba(0, 242, 254, 0.05) 1px, transparent 1px);
  background-size: 50px 50px, 100px 100px;
  background-position: 0 0, 25px 25px;

  /* Performance optimizations */
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* Subtle animation on hover */
  &:hover {
    background-size: 52px 52px, 102px 102px;
    transition: background-size 0.8s ease;
  }

  @media (max-width: 768px) {
    height: calc(100vh - 60px);
    background-size: 40px 40px, 80px 80px;
    background-position: 0 0, 20px 20px;
  }

  @media (max-width: 550px) {
    height: calc(100vh - 60px);
    background-size: 30px 30px, 60px 60px;
    background-position: 0 0, 15px 15px;
  }
`;

export default Container;
