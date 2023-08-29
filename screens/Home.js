import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const goToMovieSearch = () => {
    navigation.navigate("MovieSearch");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>MOVIE SEARCH APP</Text>
      <TouchableOpacity style={styles.button} onPress={goToMovieSearch}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home



const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      height: '100%',
      width: '100%',
      justifyContent: 'center'
    },
    h1: {
        color: 'white',
        fontSize: 35,
        textShadowColor: 'white',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'white',
        width: '70%',
        borderRadius: 10,
        marginLeft: 60,
        marginRight: 50,
        marginTop: 70,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
    }
  });
  