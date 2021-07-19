import React from 'react'
import { View, Image, FlatList, ActivityIndicator, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PokemonCard from '../components/PokemonCard';

import usePokemonPaginated from '../Hooks/usePokemonPaginated';
import { styles } from '../Theme/appTheme';


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const { simplePokemonList, loadPokemons } = usePokemonPaginated();


    return (
        <>

            <Image source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG} />

            <View style={{ alignItems: 'center', }} >
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(poke) => poke.id}
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={() =>

                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: 20,
                            paddingBottom: 10,
                        }} > Pokedex</Text>
                    }
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <PokemonCard pokemon={item} />
                    )}

                    // infinite Scroll
                    onEndReached={loadPokemons}
                    onEndReachedThreshold={0.4}

                    ListFooterComponent={(
                        <ActivityIndicator
                            style={{
                                height: 100,
                            }}
                            size={20}
                            color='indigo'
                        />)}

                />
            </View>

        </>
    )
}

export default HomeScreen;
