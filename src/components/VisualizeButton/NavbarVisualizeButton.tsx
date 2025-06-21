import React, { ReactElement } from 'react';
import Container from './NavbarContainer';

interface Props {
  onClick: Function;
  isVisualizing: boolean;
}

const NavbarVisualizeButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container
      isVisualizing={props.isVisualizing}
      onClick={() => {
        if (!props.isVisualizing) {
          props.onClick();
        }
      }}
      style={{ minWidth: 100, height: 36, fontSize: 15, fontWeight: 600, borderRadius: 8, background: 'linear-gradient(135deg, #4facfe, #00f2fe)', color: '#fff', border: 'none', letterSpacing: 0, padding: '0 18px', transition: 'background 0.2s' }}
    >
      {props.isVisualizing ? (
        <>
          <span style={{ marginRight: '5px' }}>🔄</span> 
          Visualizing...
        </>
      ) : (
        <>
          <span style={{ marginRight: '5px' }}>🚀</span> 
          Visualize
        </>
      )}
    </Container>
  );
};

export default NavbarVisualizeButton;
