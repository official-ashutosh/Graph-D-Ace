import styled from 'styled-components';
import themes from '../../../themes';

interface Props {
  direction: 'left' | 'right';
}

const Arrow = styled.div<Props>`
  ${(props) =>
    props.direction === 'left' ? 'margin-left: 25%' : 'margin-right: 25%'};
  border: solid
    ${(props) =>
      props.theme.name === 'dark'
        ? themes.light.navbar.background
        : themes.dark.navbar.background};
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 10px;
  cursor: pointer;

  transform: rotate(
    ${(props) => (props.direction === 'left' ? '135deg' : '-45deg')}
  );
  -webkit-transform: rotate(
    ${(props) => (props.direction === 'left' ? '135deg' : '-45deg')}
  );
`;

export default Arrow;
