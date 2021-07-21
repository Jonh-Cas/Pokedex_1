import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebouncedValue from '../Hooks/useDebouncedValue';


interface Props {
    onDebounced: (value: string) => void;
    style?: StyleProp<ViewStyle>;
}

const SearchInpunt = ({style, onDebounced }: Props) => {

    const [textValue, setTextValue] = useState('');
    
    const  debouncedValue = useDebouncedValue(textValue);
    useEffect(() => {
        onDebounced(debouncedValue);
    }, [debouncedValue])
    return (
        <View style={{
            ...styles.container,
            ...style as any
            }} >
            <View style={styles.textBackground} >
                <TextInput
                    placeholder='Buscar Pokemon'
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholderTextColor='gray'
                    value={textValue }
                    onChangeText={ setTextValue }
                    
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
        color: 'black',
    },
})
