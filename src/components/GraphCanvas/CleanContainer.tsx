import styled from 'styled-components';
import Theme from '../../models/Theme';

interface Props {
  theme: Theme;
}

const Container = styled.div<Props>`
  position: relative;
  height: calc(100vh - 60px);
  width: 100vw;
  max-width: 100%;
  max-height: 100%;
  background: ${(props) => props.theme.canvas.background};
  transition: all 0.2s ease;
  overflow: hidden;
  
  /* Simple dot grid pattern */
  background-image: 
    radial-gradient(circle, #d1d5db 1px, transparent 1px);
  background-size: 20px 20px;
  background-position: 0 0;

  @media (max-width: 768px) {
    height: calc(100vh - 50px);
    background-size: 15px 15px;
  }

  @media (max-width: 550px) {
    height: calc(100vh - 50px);
    background-size: 15px 15px;
  }
`;

export default Container;
