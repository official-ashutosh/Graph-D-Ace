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
  height: 38px;
  width: 38px;
  border-radius: 8px;
  object-fit: contain;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const MainTitle = styled.h1`
  font-size: 22px;
  font-weight: 800;
  margin: 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
`;

const GraphDAceLogoComponent = () => (
  <GraphDAceLogo>
    <LogoImage 
      src="/images/graph-d-ace-logo.png" 
      alt="Graph D Ace Logo"
      onError={(e) => {
        // Fallback if logo not found
        console.log('Logo not found, using fallback');
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
    <LogoText>
      <MainTitle>Graph D Ace</MainTitle>
    </LogoText>
  </GraphDAceLogo>
);

export default GraphDAceLogoComponent;
