import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../Navigation/StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import usePokemon from '../Hooks/usePokemon';
import PokemonDetails from '../components/PokemonDetails';



interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> { };


const PokemonScreen = ({ navigation, route }: Props) => {

    const { simplePokemon, color } = route.params;
    const { name, id, picture } = simplePokemon;
    const { top } = useSafeAreaInsets();

    const { isLoading, pokemon } = usePokemon(id);

    return (

        <View style={{ flex: 1 }} >
            {/* HeaderContainer */}
            <View style={{
                ...styles.headerContainer,
                backgroundColor: color,
            }} >


                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.pop()}
                    style={{
                        ...styles.backBoton,
                        top: top + 7,
                    }}

                >
                    <Icon
                        name='arrow-back-outline'
                        size={35}
                        color='white'
                    />
                </TouchableOpacity>

                <Text
                    style={{
                        ...styles.pokemonName,
                        top: top + 40,
                    }}
                > {name + '\n'} # {id} </Text>

                <Image
                    source={require('../assets/pokebola-blanca.png')}
                    style={{
                        ...styles.pokebola,
                    }}
                />

                <FadeInImage
                    uri={picture}
                    style={styles.pokemonImage}
                />

            </View>

            {/* Detallles y loading */}

            {(isLoading)

                ? (<View style={styles.loadingIndicator} >
                    <ActivityIndicator
                        size={50}
                        color={color}
                    />
                </View>)

                : <PokemonDetails pokemon={ pokemon } />
            }

        </View>
    )
}

export default PokemonScreen;

const styles = StyleSheet.create({
    headerContainer: {
        height: 370,
        zIndex: 999,
        alignItems: 'center',
        borderBottomRightRadius: 1000,
        borderBottomLeftRadius: 1000,
    },

    backBoton: {
        position: 'absolute',
        left: 20
    },

    pokemonName: {
        color: 'white',
        fontSize: 40,
        alignSelf: 'flex-start',
        left: 20,
    },

    pokebola: {
        width: 250,
        height: 250,
        bottom: -20,
        opacity: 0.7,
    },

    pokemonImage: {
        width: 250,
        height: 250,
        position: 'absolute',
        bottom: -15,
    },

    loadingIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});



