import styled, { css } from 'styled-components';

const optionAnimations = css`
  @keyframes iconBounce {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes optionGlow {
    0%, 100% {
      box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
    }
    50% {
      box-shadow: 0 8px 30px rgba(79, 172, 254, 0.6);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const OptionsContainer = styled.div`
  ${optionAnimations}
  
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(79, 172, 254, 0.1);
  margin-bottom: 16px;
  animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const OptionButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1));
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 2px solid rgba(79, 172, 254, 0.2);
  
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  /* Modern glassmorphism overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    border-radius: inherit;
    pointer-events: none;
    z-index: 1;
  }

  /* Icon styles */
  svg, img {
    width: 24px;
    height: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    z-index: 2;
    position: relative;
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-4px) scale(1.05);
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
    border-color: rgba(79, 172, 254, 0.4);
    animation: optionGlow 2s ease-in-out infinite;
    
    svg, img {
      animation: iconBounce 0.6s ease-in-out;
      filter: drop-shadow(0 4px 8px rgba(79, 172, 254, 0.3));
    }
  }

  &:active {
    transform: translateY(-2px) scale(1.02);
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
      rgba(255, 255, 255, 0.3),
      transparent
    );
    z-index: 3;
    transition: left 0.6s ease;
  }

  &:hover::after {
    left: 100%;
  }
`;

export const OptionsTitle = styled.h3`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(79, 172, 254, 0.3), transparent);
  margin: 20px 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 5px;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border-radius: 2px;
    filter: blur(1px);
  }
`;
