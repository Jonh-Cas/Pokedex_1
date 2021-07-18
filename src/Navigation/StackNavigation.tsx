import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonScreen from '../screens/PokemonScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation;
