import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { PokemonFull } from '../interfaces/pokeInterfaces';
import { FadeInImage } from './FadeInImage';



interface Props {
    pokemon: PokemonFull;
}

const PokemonDetails = ({ pokemon }: Props) => {
    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,

            }}
        >
            <View style={{
                ...styles.container,
                marginTop: 370,
            }}>
                <Text style={styles.title} >Types </Text>
                <View style={{ flexDirection: 'row' }} >
                    {
                        pokemon.types.map(({ type }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={type.name}
                            > {type.name}
                            </Text>
                        ))}
                </View>

                <Text style={styles.title} >Peso </Text>
                <Text style={styles.regularText} > {(pokemon.weight * 0.1).toFixed(2)} Kg</Text>

            </View>


            <View style={styles.container} >
                <Text style={styles.title} > Sprites </Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={pokemon.sprites.front_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_default}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.front_shiny}
                    style={styles.basicSprites}
                />
                <FadeInImage
                    uri={pokemon.sprites.back_shiny}
                    style={styles.basicSprites}
                />

            </ScrollView>

            {/* Habilidades */}
            <View style={styles.container} >
                <Text style={styles.title} > Habilidades base </Text>
                <View style={{ flexDirection: 'row' }} >
                    {
                        pokemon.abilities.map(({ ability }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={ability.name}
                            > {ability.name}
                            </Text>
                        ))}
                </View>
            </View>

            <View style={styles.container} >
                <Text style={styles.title} > Movimientos </Text>
                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }} >
                    {
                        pokemon.moves.map(({ move }) => (
                            <Text
                                style={{
                                    ...styles.regularText,
                                    marginRight: 10,
                                }}
                                key={move.name}
                            > {move.name}
                            </Text>
                        ))}
                </View>
            </View>

            <View style={styles.container} >
                <Text style={styles.title} > Stats </Text>
                <View >
                    {
                        pokemon.stats.map((stat, i) => (
                            <View key={stat.stat.name + i}
                                style={{ flexDirection: 'row' }}  >
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        marginRight: 10,
                                        width: 150,
                                    }}
                                    key={stat.stat.name}
                                > {stat.stat.name}
                                </Text>
                                <Text
                                    style={{
                                        ...styles.regularText,
                                        fontWeight: 'bold',
                                    }}
                                    key={stat.base_stat}
                                > {stat.base_stat}
                                </Text>
                            </View>
                        ))}
                </View>
                <View style={{
                    marginBottom: 20,
                    alignItems: 'center',
                }} >
                    <FadeInImage
                        uri={pokemon.sprites.front_default}
                        style={styles.basicSprites}
                    />
                </View>


            </View>


        </ScrollView>
    )
}

export default PokemonDetails;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 2,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },

    regularText: {
        fontSize: 17,
    },

    basicSprites: {
        width: 100,
        height: 100,
    }
});
