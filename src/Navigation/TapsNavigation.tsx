import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './StackNavigation';
import SearchScreen from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{ 
            backgroundColor: 'white',
        }}

        tabBarOptions={{
            activeTintColor: '#5856D6',
            labelStyle: {
                marginBottom: (Platform.OS === 'ios') ? 0 : 10
            },
            style: {
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.92)',
                borderWidth: 0,
                elevation: 0,
                height: (Platform.OS === 'ios')? 80 : 60
            }

        }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={StackNavigation}
        options={{
                tabBarLabel: 'Listado',
                tabBarIcon: ({ color }) => <Icon color={color} size={25} name='list-outline'  />
        }}
        />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen}
        options={{
            tabBarLabel: 'Busqueda',
            tabBarIcon: ({ color }) => <Icon color={color} size={25} name='search-outline'  />
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;