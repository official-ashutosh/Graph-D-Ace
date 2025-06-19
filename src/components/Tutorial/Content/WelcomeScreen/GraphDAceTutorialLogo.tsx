import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20px 0;
`;

const LogoImage = styled.img`
  height: 120px;
  width: 120px;
  object-fit: contain;
  filter: drop-shadow(0 4px 15px rgba(79, 172, 254, 0.3));
  transition: transform 0.3s ease, filter 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 6px 20px rgba(79, 172, 254, 0.5));
  }
`;

const LogoTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  text-align: center;
`;

const LogoTagline = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${(props) => props.theme.text};
  opacity: 0.8;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;

const GraphDAceTutorialLogo: React.FC = () => (
  <LogoContainer>
    <LogoImage 
      src="/images/graph-d-ace-logo.png" 
      alt="Graph D Ace Logo"
      onError={(e) => {
        // Fallback if logo not found
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
    <div>
      <LogoTitle>Graph D Ace</LogoTitle>
      <LogoTagline>From Edges to Excellence</LogoTagline>
    </div>
  </LogoContainer>
);

export default GraphDAceTutorialLogo;
