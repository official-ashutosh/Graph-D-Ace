import styled from 'styled-components';
import Position from '../../../models/Position';

interface Props {
  isVisible: boolean;
  position: Position;
  height: number;
  invertedTheme?: boolean;
}

const Container = styled.div.attrs((props: Props) => ({
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
    height: `${props.height}px`,
  },
})) <Props>`
  position: absolute;
  width: 220px;
  padding: 8px 0;
  background: ${(props) => props.theme.sidebar.background || 'rgba(255, 255, 255, 0.95)'};
  border-radius: 12px;
  border: 1px solid rgba(0,0,0,0.1);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  z-index: 1000;
  cursor: default;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  user-select: none;
  overflow: hidden;
`;

export default Container;
