import styled from 'styled-components';
import variables from '../constants/variables';
const { colors } = variables;

export default (SeachButton = styled.TouchableOpacity`
  background-color: ${colors.textColor1};
  color: white;
  font-size: 20px;
  width: 200px;
  padding: 5px 12px;
  border-radius: 4px;
  margin: 0 auto;
`);
