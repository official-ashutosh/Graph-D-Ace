import React, { ReactElement } from 'react';
import DualToggleButtonStyled from './DualToggleButton';

interface Props {
  isVisible: boolean;
  side: 'left' | 'right';
  onClick: () => void;
}

const DualToggleButtonComponent: React.FC<Props> = (props: Props): ReactElement => {
  return (
    <DualToggleButtonStyled
      isVisible={props.isVisible}
      side={props.side}
      onClick={props.onClick}
    />
  );
};

export default DualToggleButtonComponent;
