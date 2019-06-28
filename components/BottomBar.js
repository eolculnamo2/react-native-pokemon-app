import React from 'react';
import { BottomBarWrap, Center } from '../styled-components';

import { TouchableOpacity } from 'react-native-gesture-handler';

function BottomBar() {
  return (
    <BottomBarWrap>
      <TouchableOpacity>
        <Center>Home</Center>
      </TouchableOpacity>
      <TouchableOpacity>
        <Center>About</Center>
      </TouchableOpacity>
    </BottomBarWrap>
  );
}

export default BottomBar;
