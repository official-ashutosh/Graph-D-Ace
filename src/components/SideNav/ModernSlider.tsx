import styled, { css } from 'styled-components';

interface Props {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const sliderAnimations = css`
  @keyframes thumbGlow {
    0%, 100% {
      box-shadow: 0 0 15px rgba(79, 172, 254, 0.6);
    }
    50% {
      box-shadow: 0 0 25px rgba(79, 172, 254, 0.9);
    }
  }

  @keyframes trackFill {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

const SliderContainer = styled.div`
  ${sliderAnimations}
  
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 8px;
`;

const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 6px;
  background: ${(props) => props.theme.slider?.track || '#e5e7eb'};
  border-radius: 3px;
  overflow: hidden;
  
  /* Modern track styling */
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.1) 0%, 
    rgba(0, 0, 0, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SliderFill = styled.div<{ percentage: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${(props) => props.percentage}%;
  background: ${(props) => props.theme.slider?.background || 'linear-gradient(135deg, #4facfe, #00f2fe)'};
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: trackFill 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Animated gradient flow */
  background-size: 200% 100%;
  background-image: linear-gradient(135deg, #4facfe 0%, #00f2fe 50%, #4facfe 100%);
  animation: trackFill 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    animation: shimmer 2s linear infinite;
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const SliderInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  z-index: 2;
  
  &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border: 2px solid white;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 3;
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 15px rgba(79, 172, 254, 0.6);
    animation: thumbGlow 2s ease-in-out infinite;
  }
  
  &::-webkit-slider-thumb:active {
    transform: scale(1.1);
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: linear-gradient(135deg, #4facfe, #00f2fe);
    border: 2px solid white;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &::-moz-range-thumb:hover {
    transform: scale(1.2);
    box-shadow: 0 4px 15px rgba(79, 172, 254, 0.6);
  }
`;

const SliderThumb = styled.div<{ percentage: number }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.percentage}%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  border: 3px solid white;
  box-shadow: 0 3px 12px rgba(79, 172, 254, 0.4);
  z-index: 3;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Modern thumb effects */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.3), rgba(0, 242, 254, 0.3));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${SliderInput}:hover + & {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 5px 20px rgba(79, 172, 254, 0.7);
    
    &::before {
      opacity: 1;
      animation: thumbGlow 2s ease-in-out infinite;
    }
  }
`;

export { SliderContainer, SliderTrack, SliderFill, SliderInput, SliderThumb };
