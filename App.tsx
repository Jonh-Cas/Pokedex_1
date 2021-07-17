import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import StackNavigation from './src/Navigation/StackNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>

    </>
  )
}

export default App;
