import styled from 'styled-components';
import variables from '../constants/variables';

const { colors } = variables;

export default (ProfileImage = styled.Image`
  width: 90%;
  min-height: 200px;
  margin: 16px auto;
  background-color: white;
  border: 8px solid black;
  color: ${colors.textColor1};
`);
