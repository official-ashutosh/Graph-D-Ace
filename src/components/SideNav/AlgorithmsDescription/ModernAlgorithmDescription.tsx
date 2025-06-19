import styled, { css } from 'styled-components';

const descriptionAnimations = css`
  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes textShimmer {
    0% {
      background-position: -200% center;
    }
    100% {
      background-position: 200% center;
    }
  }

  @keyframes cardFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

export const DescriptionContainer = styled.div`
  ${descriptionAnimations}
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  -webkit-backdrop-filter: ${(props) => props.theme.sidebar.backdropFilter || 'blur(20px)'};
  border: ${(props) => props.theme.sidebar.border};
  border-radius: 16px;
  padding: 20px;
  margin: 16px 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  
  position: relative;
  overflow: hidden;
  animation: fadeInSlide 0.8s cubic-bezier(0.4, 0, 0.2, 1), cardFloat 6s ease-in-out infinite 2s;

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

  /* Subtle border glow */
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.3), rgba(0, 242, 254, 0.3));
    border-radius: inherit;
    z-index: -1;
    filter: blur(4px);
    opacity: 0.5;
  }

  /* Hover effects */
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    
    &::after {
      opacity: 0.8;
      filter: blur(6px);
    }
  }
`;

export const DescriptionTitle = styled.h3`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px 0;
  z-index: 2;
  position: relative;
  
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  
  letter-spacing: 0.5px;
  text-transform: uppercase;
  
  /* Animated shimmer effect */
  &:hover {
    animation: textShimmer 2s linear infinite;
  }
`;

export const DescriptionText = styled.p`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.9;
  z-index: 2;
  position: relative;
  
  /* Enhanced readability */
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  /* Smooth transition for theme changes */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DescriptionBadge = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
  color: #4facfe;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 8px;
  border: 1px solid rgba(79, 172, 254, 0.3);
  
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.3), rgba(0, 242, 254, 0.3));
    transform: scale(1.05);
  }
`;

export const DescriptionStats = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(79, 172, 254, 0.1);
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  
  .stat-label {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.7;
    color: ${(props) => props.theme.sidebar.foreground};
  }
  
  .stat-value {
    font-size: 12px;
    font-weight: 700;
    color: #4facfe;
  }
`;
