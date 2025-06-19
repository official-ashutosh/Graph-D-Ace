import React, {ReactElement} from 'react';
import Track from './Track';
import Thumb from './Thumb';
import themes from '../../../themes';
import Theme from '../../../models/Theme';

interface ThemeSwitchProps {
  changeTheme: Function;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = (
  props: ThemeSwitchProps
): ReactElement => {
  const handleChangeTheme: () => void = () => {
    props.changeTheme((prev: Theme) => {
      // Fix theme switching logic
      const newTheme = prev.name === 'modern-dark' || prev.name === 'dark' 
        ? themes.light 
        : themes.dark;
      console.log('Switching from:', prev.name, 'to:', newTheme.name);
      return newTheme;
    });
  };

  return (
    <Track onClick={() => handleChangeTheme()}>
      <Thumb></Thumb>
    </Track>
  );
};

export default ThemeSwitch;
