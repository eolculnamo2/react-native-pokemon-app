import styled from 'styled-components';
import variables from '../constants/variables';

const { height, width } = variables.window;

const DefaultBody = styled.View`
  background-color: #ef5351;
  height: ${height}px;
  width: ${width}px;
`;

export default DefaultBody;
