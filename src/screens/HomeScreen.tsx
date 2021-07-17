import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
    return (
        <View>
            <Text> Home Screen</Text>
            <Icon name='star' size={40} color='indigo' />
        </View>
    )
}

export default HomeScreen;
