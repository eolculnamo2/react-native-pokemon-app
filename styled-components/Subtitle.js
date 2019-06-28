import styled from 'styled-components';
import variables from '../constants/variables';

const { colors } = variables;

export default (Subtitle = styled.Text`
  color: ${colors.textColor1};
  font-size: 24px;
  text-align: center;
`);
