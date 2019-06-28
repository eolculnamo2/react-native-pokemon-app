import React, { useContext } from 'react';
import MainContext from '../store/MainContext';
import { Bold, DefaultBody, StatsBody, Title, ProfileImage, Uppercase } from '../styled-components';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomBar from '../components/BottomBar';

function Information() {
  const context = useContext(MainContext);
  const { abilities, height, moves, name, sprites } = context.state;

  return (
    <DefaultBody>
      <ScrollView>
        <Title marginTop="50px">{name}</Title>
        <ProfileImage source={{ uri: sprites.front_default }} />
        <StatsBody>
          <Bold>Height:</Bold>
          <Text>
            {height} ft{'\n'}
          </Text>
          <Bold>Abilities:</Bold>
          {abilities.map(ability => (
            <Uppercase>{ability.ability.name}</Uppercase>
          ))}
          <Bold>{'\n'}Moves:</Bold>
          {moves.map(move => (
            <Uppercase>{move.move.name}</Uppercase>
          ))}
        </StatsBody>
      </ScrollView>
      <BottomBar />
    </DefaultBody>
  );
}

export default Information;
