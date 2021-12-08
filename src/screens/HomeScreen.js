import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function HomeScreen( {navigation} ){

    goToScreen = () => {
        navigation.navigate('SelectCards')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>¿Sabés lo que te depara el futuro?</Text>
            <Button title="Descubrelo!" onPress={() => goToScreen() }></Button>
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
    }
  });