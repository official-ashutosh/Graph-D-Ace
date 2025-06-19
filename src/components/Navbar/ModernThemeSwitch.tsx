import styled, { css } from 'styled-components';

interface Props {
  isDark: boolean;
}

const switchAnimations = css`
  @keyframes switchGlow {
    0%, 100% {
      box-shadow: 0 0 15px rgba(79, 172, 254, 0.4);
    }
    50% {
      box-shadow: 0 0 25px rgba(79, 172, 254, 0.7);
    }
  }

  @keyframes thumbSlide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(24px);
    }
  }

  @keyframes modeTransition {
    0% {
      filter: brightness(1);
    }
    50% {
      filter: brightness(1.3);
    }
    100% {
      filter: brightness(1);
    }
  }
`;

const SwitchContainer = styled.div`
  ${switchAnimations}
  
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
`;

const SwitchTrack = styled.div<Props>`
  width: 52px;
  height: 28px;
  border-radius: 14px;
  background: ${(props) => 
    props.isDark 
      ? 'linear-gradient(135deg, #ff6b6b, #ff8e53)' 
      : 'linear-gradient(135deg, #4facfe, #00f2fe)'};
  
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  
  position: relative;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Hover glow effect */
  &:hover {
    animation: switchGlow 2s ease-in-out infinite;
    transform: scale(1.05);
  }

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
  }
`;

const SwitchThumb = styled.div<Props>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${(props) => props.isDark ? 'translateX(24px)' : 'translateX(4px)'};
  
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  
  /* Icon overlay */
  &::after {
    content: '${(props) => props.isDark ? '🌙' : '☀️'}';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10px;
    animation: modeTransition 0.6s ease-in-out;
  }

  /* Enhanced hover effects */
  ${SwitchTrack}:hover & {
    transform: translateY(-50%) ${(props) => props.isDark ? 'translateX(24px)' : 'translateX(4px)'} scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  }
`;

const SwitchLabel = styled.span`
  color: ${(props) => props.theme.navbar.foreground};
  font-size: 14px;
  font-weight: 600;
  user-select: none;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: #4facfe;
  }
`;

export { SwitchContainer, SwitchTrack, SwitchThumb, SwitchLabel };
