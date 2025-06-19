import React, {ReactElement} from 'react';
import Container from './Container';
import GraphDAceTutorialLogo from './GraphDAceTutorialLogo';
import Row from '../../../common/Row';

const WelcomeScreen: React.FC = (): ReactElement => {
  return (
    <Container>
      <Row
        justifyContent="center"
        margin="30px 10px"
        style={{fontSize: '30px'}}
      >
        Welcome to
      </Row>
      <GraphDAceTutorialLogo />
      <Row justifyContent="center" margin="20px 10px" style={{fontSize: '24px', fontWeight: 600}}>
        Professional Graph Algorithm Visualization
      </Row>
    </Container>
  );
};

export default WelcomeScreen;
