import React from 'react'
import { View, Text, Image,FlatList, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import usePokemonPaginated from '../Hooks/usePokemonPaginated';
import { styles } from '../Theme/appTheme';
import { FadeInImage } from '../components/FadeInImage';

const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();


    return (
        <>

            <Image source={require('../assets/pokebola.png')}
                   style={styles.pokebolaBG } />

            <FlatList 
                data={simplePokemonList }
                keyExtractor={(poke) => poke.id  }
                showsVerticalScrollIndicator={false}
                renderItem={ ({item, index }) =>(
                    <FadeInImage
                        uri={ item.picture }
                        style={{
                            width: 100,
                            height: 100,
                        }}
                    
                    />
                ) }
                
                // infinite Scroll
                onEndReached={loadPokemons }
                onEndReachedThreshold={0.4 }

                ListFooterComponent={ (
                    <ActivityIndicator 
                        style={{
                            height: 100,
                        }} 
                        size={ 20 }
                        color='indigo'
                        />) }

            />

            {/* <Text style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20, 
                }} > Pokedex</Text> */}

        </>
    )
}

export default HomeScreen;
