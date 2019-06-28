import React, { useContext } from 'react';
import MainContext from '../store/MainContext';
import { Bold, DefaultBody, StatsBody, Title, ProfileImage } from '../styled-components';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Information() {
  const context = useContext(MainContext);
  const { abilities, height, moves, name, sprites } = context.state;
  console.log(sprites.front_default);
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
            <Text>{ability.ability.name}</Text>
          ))}
          <Bold>{'\n'}Moves:</Bold>
          {moves.map(move => (
            <Text>{move.move.name}</Text>
          ))}
        </StatsBody>
      </ScrollView>
    </DefaultBody>
  );
}

export default Information;
