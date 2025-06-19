import styled from 'styled-components';

interface Props {
  isVisualizing: boolean;
}

const Container = styled.div<Props>`
  z-index: 1000;
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  background: ${(props) =>
    props.isVisualizing 
      ? '#ef4444' 
      : props.theme.button?.primary || '#3b82f6'};
  
  color: white;
  border: none;
  box-shadow: ${(props) => props.theme.button?.shadow || '0 2px 4px rgba(0,0,0,0.1)'};
  
  transition: all 0.2s ease;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    width: 130px;
    height: 45px;
    font-size: 13px;
    right: 15px;
    bottom: 15px;
  }

  @media (max-width: 550px) {
    width: 120px;
    height: 40px;
    font-size: 12px;
    right: 10px;
    bottom: 10px;
  }
`;

export default Container;
