import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {IMovie} from '../interfaces/MovieInterfaces';
import DetailScreen from '../screens/DetailScreen';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  Detail: IMovie;
};

const Stack = createStackNavigator<RootStackParams>();

const MoviesNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // cardStyle: { backgroundColor: 'white' },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MoviesNavigator;
