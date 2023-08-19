import React from 'react';
import 'react-native-gesture-handler';
import {GradientProvider} from './src/context/GradientContext';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => {
  return (
    <GradientProvider>
      <AppNavigator />
    </GradientProvider>
  );
};

export default App;
