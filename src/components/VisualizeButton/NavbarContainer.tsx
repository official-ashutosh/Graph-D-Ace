import styled, { css } from 'styled-components';

interface Props {
  isVisualizing: boolean;
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
      box-shadow: 0 8px 30px rgba(79, 172, 254, 0.4);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 12px 40px rgba(79, 172, 254, 0.7);
    }
  }

  @keyframes glow {
    0%, 100% {
      filter: brightness(1) drop-shadow(0 0 10px rgba(79, 172, 254, 0.4));
    }
    50% {
      filter: brightness(1.2) drop-shadow(0 0 20px rgba(79, 172, 254, 0.8));
    }
  }
`;

const NavbarContainer = styled.div<Props>`
  ${buttonAnimations}
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: ${(props) =>
    props.isVisualizing 
      ? 'linear-gradient(135deg, #ff6b6b, #ff8e53)' 
      : props.theme.button?.primary || 'linear-gradient(135deg, #4facfe, #00f2fe)'};
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  box-shadow: none !important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(79,172,254,0.18), transparent);
    transition: left 0.5s cubic-bezier(0.4,0,0.2,1);
    z-index: 2;
    pointer-events: none;
  }

  &:hover::after {
    left: 0;
  }

  /* Shimmer effect when not visualizing */
  ${(props) => !props.isVisualizing && css`
    background-image: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.2) 50%,
      transparent 70%
    );
    background-size: 400% 100%;
  `}

  &:hover {
    transform: translateY(-3px) scale(1.03);
  }
`;

export default NavbarContainer;
