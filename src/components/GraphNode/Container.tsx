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
  size: props.zoomPercentage * 88,
  style: {
    top: `${props.position.top}px`,
    left: `${props.position.left}px`,
  },
}))<Props>`
  z-index: 10;
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
      ? (props.theme.nodeActive.background || '#667eea')
      : (props.theme.nodeInactive.background || '#ffffff')};

  color: ${(props) =>
    props.isActive
      ? (props.theme.nodeActive.foreground || '#ffffff')
      : (props.theme.nodeInactive.foreground || '#2d3748')};

  border-radius: 50%;
  border: ${(props) => 
    props.isActive 
      ? '3px solid transparent'
      : `3px solid ${props.theme.edge.background || '#2d3748'}`};
  
  box-shadow: ${(props) =>
    props.isActive
      ? '0 0 20px rgba(102, 126, 234, 0.6)'
      : '0 4px 15px rgba(0,0,0,0.1)'};

  transition: all 0.3s ease;
  user-select: none;
  cursor: grab;

  /* Simple hover effects */
  &:hover {
    transform: ${(props) => 
      props.isActive 
        ? 'scale(1.15)' 
        : 'scale(1.1)'};
    box-shadow: ${(props) =>
      props.isActive
        ? '0 0 30px rgba(102, 126, 234, 0.8)'
        : '0 8px 25px rgba(0,0,0,0.2)'};
    z-index: 15;
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.95);
  }
`;

export default Container;
