import React, { ReactElement } from 'react';
import Container from './ModernContainer';

interface Props {
  onClick: Function;
  isVisualizing: boolean;
}

const VisualizeButton: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <Container
      isVisualizing={props.isVisualizing}
      onClick={() => {
        if (!props.isVisualizing) {
          props.onClick();
        }
      }}
    >
      {props.isVisualizing ? (
        <>
          <span style={{ marginRight: '8px' }}>🔄</span> 
          Visualizing Algorithm...
        </>
      ) : (
        <>
          <span style={{ marginRight: '8px' }}>🚀</span> 
          Start Visualization
        </>
      )}
    </Container>
  );
};

export default VisualizeButton;
