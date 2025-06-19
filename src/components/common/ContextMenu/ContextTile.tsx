import styled from 'styled-components';

interface Props {
  clickable?: boolean;
}

const ContextTile = styled.div<Props>`
  width: 100%;
  min-height: 40px;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: ${(props) => props.theme.sidebar.foreground};
  font-weight: 500;
  cursor: ${(props) => props.clickable === false ? 'default' : 'pointer'};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => 
      props.clickable === false 
        ? 'transparent' 
        : props.theme.button?.secondary || '#f3f4f6'};
    color: ${(props) => 
      props.clickable === false 
        ? props.theme.sidebar.foreground 
        : props.theme.button?.primary || '#3b82f6'};
  }

  &:active {
    transform: ${(props) => 
      props.clickable === false 
        ? 'none' 
        : 'scale(0.98)'};
  }
`;

export default ContextTile;
