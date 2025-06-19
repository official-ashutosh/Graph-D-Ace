import styled from 'styled-components';
import Theme from '../../models/Theme';
import Position from '../../models/Position';

interface Props {
  theme: Theme;
  isActive: boolean;
  position: Position;
  zoomPercentage: number;
}

const Container = styled.div.attrs((props: Props) => ({
  size: Math.max(props.zoomPercentage * 80, 50),
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  z-index: ${(props) => props.isActive ? 20 : 10};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => `${Math.max(props.size / 3, 14)}px`};
  font-weight: 600;
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  box-sizing: border-box;
  
  background: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.background
      : props.theme.nodeInactive.background};

  color: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.foreground
      : props.theme.nodeInactive.foreground};

  border-radius: 50%;
  border: ${(props) => props.theme.nodeInactive.border};
  box-shadow: ${(props) =>
    props.isActive
      ? props.theme.nodeActive.glow
      : props.theme.nodeInactive.boxShadow};

  transition: all 0.2s ease;
  user-select: none;
  cursor: grab;

  &:hover {
    transform: scale(1.1);
    z-index: 25;
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: ${(props) => `${Math.max(props.size / 3.5, 12)}px`};
  }
`;

export default Container;
