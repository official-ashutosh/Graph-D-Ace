import styled, { css } from 'styled-components';

const clearButtonAnimations = css`
  @keyframes dangerPulse {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    }
    50% {
      box-shadow: 0 8px 30px rgba(255, 107, 107, 0.7);
    }
  }

  @keyframes shakeWarning {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px); }
    75% { transform: translateX(3px); }
  }
`;

const ModernClearButton = styled.div`
  ${clearButtonAnimations}
  
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
  color: white;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  margin: 12px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  user-select: none;
  
  /* Modern glassmorphism overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    pointer-events: none;
    z-index: 1;
    border-radius: inherit;
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #ff8e53 0%, #ff6b6b 100%);
    animation: dangerPulse 2s ease-in-out infinite;
    letter-spacing: 1px;
  }

  &:active {
    transform: translateY(-1px);
    animation: shakeWarning 0.5s ease-in-out;
  }

  /* Shine effect */
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
      rgba(255, 255, 255, 0.4),
      transparent
    );
    z-index: 2;
    transition: left 0.6s ease;
  }

  &:hover::after {
    left: 100%;
  }

  /* Focus styles */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3);
  }
`;

export default ModernClearButton;
