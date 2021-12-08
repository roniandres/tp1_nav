import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function SelectCards( {navigation} ){

    goToCardRed = () => {
        navigation.navigate('CardRed')
    };

    goToCardYelow = () => {
        navigation.navigate('CardYelow')
    };

    goToCardBlue = () => {
        navigation.navigate('CardBlue')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Elige tú Destino...</Text>
        
            <Pressable style={styles.button_red} onPress={() => goToCardRed() }>
                <Text>1</Text>
            </Pressable>
            <Pressable style={styles.button_yelow} onPress={() => goToCardYelow() }>
                <Text>2</Text>
            </Pressable>
            <Pressable style={styles.button_blue} onPress={() => goToCardBlue() }>
                <Text>3</Text>
            </Pressable>
        </View>     
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEE',
      alignItems: 'center',
      justifyContent: 'center',
            
    },
    texto: {
        fontSize: 20,
        fontWeight: "bold",
        color: '#635F5E',
        marginBottom: 20
    },
    button_red: {
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#C70039',
        alignSelf: 'flex-start',
        justifyContent: 'flex-start',
        width:60,
        height: 100,
        margin: 20
    }
    ,button_blue: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#1847D1',
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        width:60,
        height: 100,
        marginTop: -120,
        margin: 20
    }
    ,button_yelow: {
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 5,
        backgroundColor: '#FFC300',
        alignSelf: 'center',
        justifyContent: 'center',
        width:60,
        height: 100,
        marginTop: -120,
        margin: 20
    }
  });