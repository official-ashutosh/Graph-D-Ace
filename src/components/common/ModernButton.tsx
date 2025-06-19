import styled, { css } from 'styled-components';

interface Props {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
  disabled?: boolean;
}

const buttonAnimations = css`
  @keyframes shimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes buttonGlow {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
    }
    50% {
      box-shadow: 0 8px 30px rgba(79, 172, 254, 0.7);
    }
  }
`;

const getButtonVariant = (variant: string, theme: any) => {
  switch (variant) {
    case 'primary':
      return css`
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        border: 2px solid transparent;
        
        &:hover {
          background: linear-gradient(135deg, #00f2fe 0%, #4facfe 100%);
          box-shadow: 0 8px 25px rgba(79, 172, 254, 0.6);
        }
      `;
    case 'secondary':
      return css`
        background: rgba(255, 255, 255, 0.1);
        color: ${theme.sidebar.foreground};
        border: 2px solid rgba(79, 172, 254, 0.3);
        backdrop-filter: blur(10px);
        
        &:hover {
          background: rgba(79, 172, 254, 0.1);
          border-color: rgba(79, 172, 254, 0.5);
          color: #4facfe;
        }
      `;
    case 'danger':
      return css`
        background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
        color: white;
        border: 2px solid transparent;
        
        &:hover {
          background: linear-gradient(135deg, #ff8e53 0%, #ff6b6b 100%);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.6);
        }
      `;
    case 'success':
      return css`
        background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
        color: white;
        border: 2px solid transparent;
        
        &:hover {
          background: linear-gradient(135deg, #38a169 0%, #48bb78 100%);
          box-shadow: 0 8px 25px rgba(72, 187, 120, 0.6);
        }
      `;
    default:
      return css`
        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        color: white;
        border: 2px solid transparent;
      `;
  }
};

const getButtonSize = (size: string) => {
  switch (size) {
    case 'small':
      return css`
        padding: 8px 16px;
        font-size: 12px;
        height: 32px;
        min-width: 80px;
      `;
    case 'large':
      return css`
        padding: 16px 32px;
        font-size: 16px;
        height: 56px;
        min-width: 140px;
      `;
    default: // medium
      return css`
        padding: 12px 24px;
        font-size: 14px;
        height: 44px;
        min-width: 100px;
      `;
  }
};

const ModernButton = styled.button<Props>`
  ${buttonAnimations}
  
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  border-radius: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  overflow: hidden;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center;
  
  /* Apply variant styles */
  ${(props) => getButtonVariant(props.variant || 'primary', props.theme)}
  
  /* Apply size styles */
  ${(props) => getButtonSize(props.size || 'medium')}
  
  /* Disabled state */
  ${(props) => props.disabled && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Loading state */
  ${(props) => props.isLoading && css`
    pointer-events: none;
    
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: loading 1s linear infinite;
    }
  `}

  /* Modern hover effects */
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    letter-spacing: 1px;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    transition: transform 0.1s ease;
  }

  /* Shimmer effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover::before {
    left: 100%;
  }

  /* Focus styles */
  &:focus {
    box-shadow: 0 0 0 3px rgba(79, 172, 254, 0.3);
  }

  /* Special glow for primary buttons */
  ${(props) => (props.variant === 'primary' || !props.variant) && css`
    &:hover {
      animation: buttonGlow 2s ease-in-out infinite;
    }
  `}
`;

export default ModernButton;
