import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_KEY = 'c2a3fe78'; // Replace with your OMDB API key

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black'
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    color: 'white',
    marginTop: 30,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  movieImage: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 10,
    marginTop: 30,
    marginBottom: 30,
},
buttonText: {
    textAlign: 'center',
    fontSize: 12,
    padding: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
},
listText: {
    color: 'white',
    fontSize: 15,
    padding: 15,
    fontWeight: '600',
}
});

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const searchMovies = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
      setMovies(response.data.Search || []);
      setSearchTerm('')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for a movie..."
        onChangeText={text => setSearchTerm(text)}
        value={searchTerm}
      />
      <TouchableOpacity style={styles.button} onPress={searchMovies}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={movies}
        keyExtractor={item => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => navigation.navigate('MovieDetails', { imdbID: item.imdbID })}
          >
            <Text style={styles.listText}>{item.Title} ({item.Year})</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Search;
