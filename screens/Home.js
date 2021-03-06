import React, { useEffect, useState, useContext } from 'react';
import MainContext from '../store/MainContext';

import {
  ButtonText,
  DefaultBody,
  ErrorText,
  Title,
  SearchBox,
  Subtitle,
  SearchButton,
} from '../styled-components';
import { ScrollView } from 'react-native-gesture-handler';
import BottomBar from '../components/BottomBar';

function Home(props) {
  const { navigate } = props.navigation;
  const context = useContext(MainContext);
  const [query, setQuery] = useState('');
  const [searchError, setSearchError] = useState(false);

  useEffect(() => setSearchError(false), [query]);

  const makeFetch = () => {
    if (query.length) {
      const apiUrl = `https://pokeapi.co/api/v2/pokemon/${query}`;
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          context.dispatch({ type: 'SET_DATA', payload: data });
          navigate('Information');
        })
        .catch(() => setSearchError(true));
    } else {
      setSearchError(true);
    }
  };

  return (
    <DefaultBody>
      <ScrollView>
        <Title>Pokedex</Title>
        <Subtitle>With React Native</Subtitle>
        <SearchBox onChangeText={text => setQuery(text.toLowerCase())} />
        <SearchButton onPress={makeFetch}>
          <ButtonText>Search</ButtonText>
        </SearchButton>
        {searchError && (
          <ErrorText>Search error. Did you spell the Pokemon's name correctly?</ErrorText>
        )}
      </ScrollView>
      <BottomBar />
    </DefaultBody>
  );
}

export default Home;
