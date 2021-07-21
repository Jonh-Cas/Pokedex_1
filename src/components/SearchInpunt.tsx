import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const SearchInpunt = () => {
    return (
        <View style={styles.container} >
            <View style={styles.textBackground} >
                <TextInput
                    placeholder='Buscar Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='gray'
                />

                <Icon
                    name='search-outline'
                    color='gray'
                    size={20}
                />

            </View>
        </View>
    )
}

export default SearchInpunt;

const styles = StyleSheet.create({

    container: {
     
    },

    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

    textInput: {
        flex: 1,
        fontSize: 18,
    },
})
