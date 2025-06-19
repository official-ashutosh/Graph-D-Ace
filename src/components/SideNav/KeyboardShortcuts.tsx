import React, { ReactElement, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const shortcutAnimations = css`
  @keyframes slideInFromBottom {
    from {
      opacity: 0;
      transform: translateY(100px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ShortcutsOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  
  background: ${(props) => props.theme.sidebar.background};
  backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid rgba(79, 172, 254, 0.3);
  border-radius: 16px;
  padding: 20px;
  min-width: 300px;
  max-width: 400px;
  
  opacity: ${(props) => props.isVisible ? 1 : 0};
  visibility: ${(props) => props.isVisible ? 'visible' : 'hidden'};
  transform: ${(props) => props.isVisible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  animation: ${(props) => props.isVisible ? 'slideInFromBottom 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'};
`;

const ShortcutsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(79, 172, 254, 0.2);
`;

const ShortcutsTitle = styled.h3`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 18px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const ShortcutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ShortcutAction = styled.span`
  color: ${(props) => props.theme.sidebar.foreground};
  font-size: 13px;
  opacity: 0.9;
`;

const ShortcutKey = styled.span`
  background: linear-gradient(135deg, rgba(79, 172, 254, 0.2), rgba(0, 242, 254, 0.2));
  color: #4facfe;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  border: 1px solid rgba(79, 172, 254, 0.3);
`;

const shortcuts = [
  { action: 'Add Node', key: 'A' },
  { action: 'Connect Vertices', key: 'E' },
  { action: 'Remove Object', key: 'R' },
  { action: 'Clear Canvas', key: 'C' },
  { action: 'Toggle Left Sidebar', key: 'L' },
  { action: 'Toggle Right Sidebar', key: 'G' },
  { action: 'Start Visualization', key: 'Space' },
  { action: 'Reset Zoom', key: '0' },
  { action: 'Zoom In', key: '+' },
  { action: 'Zoom Out', key: '-' },
  { action: 'Show Help', key: 'H' },
  { action: 'Show Shortcuts', key: '?' }
];

const KeyboardShortcuts: React.FC<Props> = ({ isVisible, onClose }: Props): ReactElement => {
  const [displayedShortcuts, setDisplayedShortcuts] = useState<typeof shortcuts>([]);

  useEffect(() => {
    if (isVisible) {
      // Animate shortcuts appearing one by one
      shortcuts.forEach((shortcut, index) => {
        setTimeout(() => {
          setDisplayedShortcuts(prev => [...prev, shortcut]);
        }, index * 100);
      });
    } else {
      setDisplayedShortcuts([]);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, onClose]);

  if (!isVisible) return <></>;

  return (
    <ShortcutsOverlay isVisible={isVisible}>
      <ShortcutsHeader>
        <ShortcutsTitle>⌨️ Keyboard Shortcuts</ShortcutsTitle>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ShortcutsHeader>
      
      <div>
        {displayedShortcuts.map((shortcut, index) => (
          <ShortcutItem key={shortcut.action}>
            <ShortcutAction>{shortcut.action}</ShortcutAction>
            <ShortcutKey>{shortcut.key}</ShortcutKey>
          </ShortcutItem>
        ))}
      </div>
      
      <div style={{ 
        marginTop: '16px', 
        padding: '8px', 
        background: 'rgba(255, 255, 255, 0.05)', 
        borderRadius: '6px',
        fontSize: '11px',
        opacity: 0.8,
        textAlign: 'center'
      }}>
        Press <ShortcutKey style={{ fontSize: '10px' }}>Esc</ShortcutKey> to close
      </div>
    </ShortcutsOverlay>
  );
};

export default KeyboardShortcuts;
