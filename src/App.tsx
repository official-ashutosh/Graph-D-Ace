import React, {ReactElement, useState, useEffect} from 'react';
import Home from './components/Home/Home';
import {ThemeProvider} from 'styled-components';
import themes from './themes';
import Theme from './models/Theme';
import Tutorial from './components/Tutorial/Tutorial';
import ErrorBoundary from './components/ErrorBoundary';
import { LoadingSpinner, LoadingContainer, LoadingText } from './components/common/LoaderComponents';

const App: React.FC<{}> = (): ReactElement => {
  const [globalTheme, setGlobalTheme] = useState<Theme>(themes.light);
  const [isTutorialVisible, setIsTutorialVisible] = useState<boolean>(
    (localStorage.getItem('isFirstTime') ?? 'true') === 'true'
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Simulate loading for smooth app initialization
  useEffect(() => {
    const initializeApp = async () => {
      // Simulate some initialization time for smooth loading effect
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsLoading(false);
    };
    
    initializeApp();
  }, []);

  const onTutorialExit = () => {
    setIsTutorialVisible(false);
    localStorage.setItem('isFirstTime', 'false');
  };

  const onTutorialOpen = () => {
    setIsTutorialVisible(true);
  };

  // Show modern loading screen
  if (isLoading) {
    return (
      <ThemeProvider theme={globalTheme}>
        <LoadingContainer className="fullscreen" style={{
          background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
          flexDirection: 'column'
        }}>
          <LoadingSpinner size="large" variant="primary" />
          <LoadingText style={{ 
            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: '18px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>
            Loading Graph D Ace...
          </LoadingText>
        </LoadingContainer>
      </ThemeProvider>
    );
  }

  return (
    <ErrorBoundary>
      <ThemeProvider theme={globalTheme}>
        <div className="app-root animate-fade-in" style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Home onHelpClick={onTutorialOpen} changeTheme={setGlobalTheme} />
          <Tutorial onExit={onTutorialExit} isVisible={isTutorialVisible} />
          
          {/* Background decoration effects */}
          <div className="bg-effects" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: -1,
            opacity: 0.6,
            background: `
              radial-gradient(circle at 20% 80%, rgba(79, 172, 254, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(0, 242, 254, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(79, 172, 254, 0.05) 0%, transparent 50%)
            `
          }} />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
