import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CardBlue( {navigation} ){
    
    goToHome = () => {
        navigation.navigate('HomeScreen')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>La birra engorda, pero no será tú caso. Disfrutalá!</Text>

            <Button title="Volver" onPress={() => goToHome() }></Button>
        </View>     
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1847D1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#fff',
        margin: 40,
        textAlign: 'left'
    }
  });