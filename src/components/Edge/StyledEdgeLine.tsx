import styled from 'styled-components';

interface Props {
  isVisited: boolean;
}

const StyledLink = styled.polyline<Props>`
  stroke: ${(props) => 
    props.isVisited 
      ? '#ff6b6b' 
      : (props.theme.edge.background || '#2d3748')};
  stroke-width: ${(props) => props.isVisited ? '5px' : '4px'};
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  transition: all 0.3s ease;
  position: absolute;

  /* Simple hover effects */
  &:hover {
    stroke-width: 6px;
  }
`;

export default StyledLink;
