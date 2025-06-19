import styled, { css } from 'styled-components';

const loadingAnimations = css`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.1);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary';
}

export const LoadingContainer = styled.div`
  ${loadingAnimations}
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  animation: fadeIn 0.5s ease-in-out;
`;

export const LoadingSpinner = styled.div<SpinnerProps>`
  ${(props) => {
    const sizes = {
      small: '24px',
      medium: '40px',
      large: '60px'
    };
    return css`
      width: ${sizes[props.size || 'medium']};
      height: ${sizes[props.size || 'medium']};
    `;
  }}
  
  border: 4px solid rgba(79, 172, 254, 0.2);
  border-top: 4px solid ${(props) => 
    props.variant === 'secondary' ? '#ff6b6b' : '#3182ce'};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border: 2px solid transparent;
    border-top: 2px solid rgba(79, 172, 254, 0.1);
    border-radius: 50%;
    animation: spin 2s linear infinite reverse;
  }
`;

export const LoadingText = styled.div`
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
  animation: pulse 2s ease-in-out infinite;
  text-align: center;
`;
