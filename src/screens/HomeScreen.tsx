import React from 'react'
import { View, Text, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import usePokemonPaginated from '../Hooks/usePokemonPaginated';
import { styles } from '../Theme/appTheme';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    usePokemonPaginated();


    return (
        <>

            <Image source={require('../assets/pokebola.png')}
                   style={styles.pokebolaBG } />
            <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20, 
                }} > Pokedex</Text>

        </>
    )
}

export default HomeScreen;
