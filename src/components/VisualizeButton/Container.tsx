import styled from 'styled-components';

interface Props {
  isVisualizing: boolean;
}

const Container = styled.div<Props>`
  z-index: 100;
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  
  background: ${(props) =>
    props.isVisualizing 
      ? '#ff6b6b' 
      : (props.theme.button?.primary || '#667eea')};
  
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.2);
  
  box-shadow: ${(props) =>
    props.isVisualizing 
      ? '0 8px 32px rgba(255, 107, 107, 0.5)' 
      : '0 8px 32px rgba(102, 126, 234, 0.4)'};
  
  transition: all 0.3s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: ${(props) =>
      props.isVisualizing 
        ? '0 12px 40px rgba(255, 107, 107, 0.7)' 
        : '0 12px 40px rgba(102, 126, 234, 0.6)'};
    letter-spacing: 1px;
  }

  &:active {
    transform: translateY(-1px) scale(1.02);
    transition: transform 0.1s ease;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    width: 160px;
    height: 45px;
    font-size: 14px;
    right: 20px;
    bottom: 20px;
  }

  @media (max-width: 550px) {
    width: 140px;
    height: 40px;
    font-size: 12px;
    right: 15px;
    bottom: 15px;
  }
`;

export default Container;
