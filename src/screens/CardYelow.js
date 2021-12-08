import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CardYelow( {navigation} ){

    goToHome = () => {
        navigation.navigate('HomeScreen')
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Dejá de dar tumbos por la vida y madura!</Text>

            <Button title="Volver" onPress={() => goToHome() }></Button>
        </View>     
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFC300',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#635F5E',
        margin: 40,
        textAlign: 'left'
    }
  });