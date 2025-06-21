import React from 'react';
import styled from 'styled-components';

const GraphDAceLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 5px 10px;
  user-select: none;
`;

const LogoImage = styled.img`
  height: 44px;
  width: 44px;
  border-radius: 12px;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  border: 1.5px solid #e0eafc;
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
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-left: 2px;
`;

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
`;

const GraphDAceLogoComponent = () => (
  <GraphDAceLogo>
    <LogoImage 
      src="/graph-d-ace-logo.png" 
      alt="Graph D Ace Logo"
      onError={(e) => {
        // Fallback if logo not found
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
    <LogoText>
      <MainTitle>Graph D Ace</MainTitle>
    </LogoText>
  </GraphDAceLogo>
);

export default GraphDAceLogoComponent;
