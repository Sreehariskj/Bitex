import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './Stack/RootStack';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
