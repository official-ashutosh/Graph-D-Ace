import styled, { css } from 'styled-components';

const featureAnimations = css`
  @keyframes featureSlideIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes featureGlow {
    0%, 100% {
      box-shadow: 0 2px 8px rgba(79, 172, 254, 0.2);
    }
    50% {
      box-shadow: 0 4px 16px rgba(79, 172, 254, 0.4);
    }
  }
`;

export const FeatureCard = styled.div`
  ${featureAnimations}
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(79, 172, 254, 0.2);
  border-radius: 12px;
  padding: 16px;
  margin: 8px 0;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: featureSlideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    animation: featureGlow 2s ease-in-out infinite;
    border-color: rgba(79, 172, 254, 0.4);
  }
`;

export const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 8px 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const FeatureDescription = styled.p`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 12px;
  line-height: 1.4;
  margin: 0;
  opacity: 0.8;
`;

export const ToggleSwitch = styled.div<{ isEnabled: boolean }>`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  background: ${(props) => 
    props.isEnabled 
      ? 'linear-gradient(135deg, #4facfe, #00f2fe)'
      : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(props) => props.isEnabled ? '22px' : '2px'};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const NumberInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 2px solid rgba(79, 172, 254, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 14px;
  outline: none;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:focus {
    border-color: #4facfe;
    box-shadow: 0 0 0 2px rgba(79, 172, 254, 0.2);
  }
  
  &::placeholder {
    color: rgba(79, 172, 254, 0.6);
  }
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' | 'danger' }>`
  width: 100%;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  ${(props) => {
    switch (props.variant) {
      case 'danger':
        return css`
          background: linear-gradient(135deg, #ff6b6b, #ff8e53);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #ff8e53, #ff6b6b);
            transform: translateY(-1px);
          }
        `;
      case 'secondary':
        return css`
          background: rgba(255, 255, 255, 0.1);
          color: ${props.theme.sidebar.foreground};
          border: 1px solid rgba(79, 172, 254, 0.3);
          &:hover {
            background: rgba(79, 172, 254, 0.1);
            color: #4facfe;
          }
        `;
      default:
        return css`
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
          &:hover {
            background: linear-gradient(135deg, #00f2fe, #4facfe);
            transform: translateY(-1px);
          }
        `;
    }
  }}
  
  &:active {
    transform: translateY(0);
  }
`;
