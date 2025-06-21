import React, {ReactElement} from 'react';
import Container from './ModernContainer';
import Row from '../common/Row';
import GithubLogo from './GithubLogo';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import GraphDAceLogoComponent from './GraphDAceLogo';
import HelpIcon from './HelpIcon';
import NavbarVisualizeButton from '../VisualizeButton/NavbarVisualizeButton';

interface NavbarProps {
  changeTheme: Function;
  onHelpClick: () => void;
  onVisualize: Function;
  isVisualizing: boolean;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps): ReactElement => {
  const openUrl = (url: string) => {
    window.open(url, '_blank')?.focus();
  };
  return (
    <Container>
      <Row justifyContent="flex-start" style={{paddingLeft: 0, minWidth: 0, alignItems: 'center', gap: 6}}>
        <GraphDAceLogoComponent />
      </Row>
      <Row justifyContent="center" style={{minWidth: 0, alignItems: 'center', justifyContent: 'center'}}>
        <NavbarVisualizeButton 
          onClick={props.onVisualize}
          isVisualizing={props.isVisualizing}
        />
      </Row>
      <Row justifyContent="flex-end" style={{paddingRight: 0, minWidth: 0, alignItems: 'center', gap: 18, justifyContent: 'flex-end'}}>
        <ThemeSwitch changeTheme={props.changeTheme} />
        <GithubLogo onClick={() => openUrl('https://github.com/official-ashutosh/Graph-D-Ace')} />
        <HelpIcon onClick={() => props.onHelpClick()} />
      </Row>
    </Container>
  );
};

export default Navbar;
