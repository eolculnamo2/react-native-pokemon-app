import React, { useReducer } from 'react';
import MainContext from './store/MainContext';
import reducer from './store/main-reducer';
import initialState from './store/initialState';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home, Information } from './screens';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Information: { screen: Information },
});

const Navigation = createAppContainer(MainNavigator);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      <Navigation />
    </MainContext.Provider>
  );
}

export default App;
