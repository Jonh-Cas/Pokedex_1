import React from 'react'
import { View, Text, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchInpunt from '../components/SearchInpunt';

const SearchScreen = () => {

    const { top } = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1,
            marginTop: (Platform.OS === 'ios' ) ? top : top + 20,
            padding: 20,
            }} >
                <SearchInpunt />
        </View>
    )
}

export default SearchScreen;
