import React, { useEffect, useState } from 'react'
import { View, Text, Platform, ActivityIndicator, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import SearchInpunt from '../components/SearchInpunt';
import usePokemonSearch from '../Hooks/usePokemonSearch';
import { styles  } from '../Theme/appTheme';
import { SimplePokemon } from '../interfaces/pokeInterfaces';

const screenWidth = Dimensions.get('window').width

const SearchScreen = () => {

    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();
    const [term, setTerm] = useState('');
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([]);

    useEffect(() => {
       
        if(term.length === 0){
            return setPokemonFiltered([]);
        }

        if(isNaN(Number(term) )){
            setPokemonFiltered(
                simplePokemonList.filter( poke => 
                    poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()) )
            );
        }else{
            const pokemonById = simplePokemonList.find( (poke) => poke.id === term )
            setPokemonFiltered(
                ( pokemonById ) ? [ pokemonById ] : []
            )
        }

    }, [term])


    if(isFetching){
        return(
            <Loading />
        );
    }




    return (
        <View style={{
            flex: 1,
            alignItems: 'center'
            }} >
                <SearchInpunt
                    onDebounced={ (value) => setTerm(value) }
                    style={{
                        position: 'absolute',
                        zIndex: 999,
                        width: screenWidth - 40,
                        top: (Platform.OS === 'ios') ?  top : top + 20,
                    }}
                />
                <FlatList
                    data={pokemonFiltered}
                    keyExtractor={(poke) => poke.id}
                    showsVerticalScrollIndicator={false}
                    
                    // Header
                    ListHeaderComponent={() =>

                        <Text style={{
                            ...styles.title,
                            ...styles.globalMargin,
                            top: top + 20,
                            marginBottom: 20,
                            paddingBottom: 10,
                            marginTop: (Platform.OS === 'ios') ?  top + 60 : top + 60
                        }} > {term} </Text>
                    }
                    numColumns={2}
                    renderItem={({ item }) => ( <PokemonCard pokemon={item} /> )}


                />
        </View>
        
    )
}

export default SearchScreen;


