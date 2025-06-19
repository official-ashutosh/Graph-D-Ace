import React, { ReactElement } from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid rgba(79, 172, 254, 0.2);
  padding: 12px 20px;
  z-index: 100;
  
  /* Modern glassmorphism effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
    pointer-events: none;
    z-index: -1;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 800;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${float} 3s ease-in-out infinite;
`;

const Tagline = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.sidebar.foreground};
  opacity: 0.8;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 11px;
  color: ${(props) => props.theme.sidebar.foreground};
  opacity: 0.7;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const Version = styled.span`
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
  color: #4facfe;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 600;
  border: 1px solid rgba(79, 172, 254, 0.3);
`;

const Copyright = styled.span`
  font-weight: 500;
`;

const Footer: React.FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <Logo>Graph D Ace</Logo>
          <Tagline>From Edges to Excellence</Tagline>
        </BrandSection>
        
        <InfoSection>
          <Version>v1.0.0</Version>
          <Copyright>© {currentYear} Graph D Ace</Copyright>
          <span>Professional Graph Analysis Tool</span>
        </InfoSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
