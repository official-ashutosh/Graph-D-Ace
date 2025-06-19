import React, { ReactElement, useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  onClose: () => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const WelcomeOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(79, 172, 254, 0.9) 0%, 
    rgba(0, 242, 254, 0.9) 50%,
    rgba(79, 172, 254, 0.9) 100%);
  backdrop-filter: blur(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3000;
  
  opacity: ${(props) => props.isVisible ? 1 : 0};
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const WelcomeCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  padding: 48px;
  max-width: 600px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  border: 2px solid rgba(255, 255, 255, 0.3);
`;

const WelcomeTitle = styled.h1`
  font-size: 48px;
  font-weight: 900;
  margin: 0 0 12px 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
  animation: ${slideUp} 1s cubic-bezier(0.4, 0, 0.2, 1);
`;

const WelcomeTagline = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 24px 0;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
  animation: ${slideUp} 1.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const WelcomeDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 32px 0;
  color: #555;
  animation: ${slideUp} 1.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 32px 0;
  animation: ${slideUp} 1.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const FeatureCard = styled.div`
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.1), rgba(0, 242, 254, 0.1));
  border: 1px solid rgba(79, 172, 254, 0.3);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 32px;
  margin-bottom: 12px;
`;

const FeatureTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #4facfe;
`;

const FeatureDesc = styled.p`
  font-size: 14px;
  margin: 0;
  color: #666;
  line-height: 1.4;
`;

const StartButton = styled.button`
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  color: white;
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: ${slideUp} 1.8s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const features = [
  {
    icon: '🧠',
    title: '17 Algorithms',
    description: 'From basic traversals to NP-complete problems'
  },
  {
    icon: '📊',
    title: 'Professional UI',
    description: 'Modern dual-sidebar interface'
  },
  {
    icon: '⚡',
    title: 'Real-time Analytics',
    description: 'Live performance metrics and statistics'
  },
  {
    icon: '🎨',
    title: 'Interactive Learning',
    description: 'Educational content with practical examples'
  }
];

const WelcomeScreen: React.FC<Props> = ({ onClose }: Props): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 600); // Wait for animation to complete
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 600);
    }, 8000); // Auto-close after 8 seconds

    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <WelcomeOverlay isVisible={isVisible} onClick={handleClose}>
      <WelcomeCard onClick={(e) => e.stopPropagation()}>
        {/* Logo Image */}
        <div style={{ marginBottom: '20px' }}>
          <img 
            src="/images/graph-d-ace-logo.png" 
            alt="Graph D Ace Logo"
            style={{ 
              height: '80px', 
              width: '80px',
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 15px rgba(79, 172, 254, 0.3))'
            }}
          />
        </div>
        
        <WelcomeTitle>Graph D Ace</WelcomeTitle>
        <WelcomeTagline>From Edges to Excellence</WelcomeTagline>
        <WelcomeDescription>
          Master graph algorithms with the most comprehensive visualization tool. 
          Explore 17 professional algorithms from basic traversals to advanced optimizations.
        </WelcomeDescription>
        
        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDesc>{feature.description}</FeatureDesc>
            </FeatureCard>
          ))}
        </FeatureGrid>
        
        <StartButton onClick={handleClose}>
          Start Your Journey to Excellence
        </StartButton>
      </WelcomeCard>
    </WelcomeOverlay>
  );
};

export default WelcomeScreen;
