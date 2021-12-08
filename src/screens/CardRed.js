import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function CardRed( {navigation} ){

    goToHome = () => {
        navigation.navigate('HomeScreen')
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Aflojá con tanta Chipa que la malla que piensas clavarte este verano no te va a entrar...</Text>

            <Button title="Volver" onPress={() => goToHome() }></Button>
        </View>             
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C70039',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#FFF',
        margin: 40,
        textAlign: 'left'
    }
  });