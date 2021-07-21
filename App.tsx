import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/Navigation/TapsNavigation';

const App = () => {
  return (
    <>
      <NavigationContainer>
          {/* <StackNavigation /> */}
        <Tabs />
      </NavigationContainer>

    </>
  )
}

export default App;
