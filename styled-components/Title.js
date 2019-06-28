import styled from 'styled-components';
import variables from '../constants/variables';

const { colors } = variables;

export default (Title = styled.Text`
  color: ${colors.textColor1};
  font-size: 32px;
  text-align: center;
  margin-top: ${props => (props.marginTop ? props.marginTop : '100px')};
  text-transform: capitalize;
`);
