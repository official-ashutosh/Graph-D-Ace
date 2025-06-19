import styled, { keyframes } from 'styled-components';

const spinnerAnimations = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
}

const getSpinnerSize = (size: string) => {
  switch (size) {
    case 'small':
      return '20px';
    case 'large':
      return '60px';
    default: // medium
      return '40px';
  }
};

const getSpinnerColor = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return 'linear-gradient(135deg, #6c757d, #495057)';
    case 'danger':
      return 'linear-gradient(135deg, #ff6b6b, #ff8e53)';
    default: // primary
      return 'linear-gradient(135deg, #4facfe, #00f2fe)';
  }
};

export const LoadingSpinner = styled.div<LoadingSpinnerProps>`
  width: ${(props) => getSpinnerSize(props.size || 'medium')};
  height: ${(props) => getSpinnerSize(props.size || 'medium')};
  border: 3px solid transparent;
  border-radius: 50%;
  background: ${(props) => getSpinnerColor(props.variant || 'primary')};
  background-size: 200% 200%;
  animation: ${spinnerAnimations} 1s linear infinite, ${gradientShift} 2s ease infinite;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: ${(props) => props.theme.sidebar?.background || 'white'};
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background: ${(props) => getSpinnerColor(props.variant || 'primary')};
    background-size: 200% 200%;
    border-radius: 50%;
    animation: ${pulseAnimation} 1.5s ease-in-out infinite;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  
  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    z-index: 9999;
  }
`;

export const LoadingText = styled.div`
  margin-top: 16px;
  color: ${(props) => props.theme.sidebar?.foreground || '#333'};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  opacity: 0.8;
`;
