import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import MoviesNavigator from './MoviesNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MoviesNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
