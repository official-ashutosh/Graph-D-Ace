import styled, { css } from 'styled-components';

interface Props {
  isSelected?: boolean;
}

const tileAnimations = css`
  @keyframes tileHover {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(8px);
    }
  }

  @keyframes selectedPulse {
    0%, 100% {
      background: linear-gradient(135deg, rgba(79, 172, 254, 0.15), rgba(0, 242, 254, 0.15));
    }
    50% {
      background: linear-gradient(135deg, rgba(79, 172, 254, 0.25), rgba(0, 242, 254, 0.25));
    }
  }
`;

const ContentTile = styled.div<Props>`
  ${tileAnimations}
  
  display: flex;
  align-items: center;
  padding: 12px 16px;
  margin: 2px 8px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  color: ${(props) => props.theme.sidebar.foreground};
  
  background: ${(props) => 
    props.isSelected 
      ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.15), rgba(0, 242, 254, 0.15))'
      : 'transparent'};
  
  border: ${(props) => 
    props.isSelected 
      ? '1px solid rgba(79, 172, 254, 0.3)'
      : '1px solid transparent'};
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  /* Selected state animation */
  ${(props) => props.isSelected && css`
    animation: selectedPulse 3s ease-in-out infinite;
    color: #4facfe;
    font-weight: 600;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(135deg, #4facfe, #00f2fe);
      border-radius: 0 2px 2px 0;
    }
  `}

  /* Hover effects */
  &:hover {
    background: ${(props) => 
      props.isSelected 
        ? 'linear-gradient(135deg, rgba(79, 172, 254, 0.25), rgba(0, 242, 254, 0.25))'
        : 'linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1))'};
    transform: translateX(6px);
    color: #4facfe;
    border-color: rgba(79, 172, 254, 0.2);
  }

  &:active {
    transform: translateX(3px) scale(0.98);
  }

  /* Shine effect on hover */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::after {
    left: 100%;
  }

  /* Modern focus styles */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(79, 172, 254, 0.3);
  }
`;

export default ContentTile;
