import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'c2a3fe78';  // Replace with your OMDB API key

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'black',
  },
  movieImage: {
    width: 300,
    height: 350,
    marginBottom: 20,
    borderRadius: 12,
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  movieYear: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  moviePlot: {
    fontSize: 16,
    color: 'white',
    padding: 10,
    lineHeight: 25,
  },
  genre: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

const Movie = ({ route }) => {
  const { imdbID } = route.params;
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieDetails();
  }, [imdbID]);

  if (!movieDetails) {
    return null; // Add loading indicator or error message here
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: movieDetails.Poster }}
        style={styles.movieImage}
      />
      <Text style={styles.movieTitle}>{movieDetails.Title}</Text>
      <Text style={styles.movieYear}>{movieDetails.Year}</Text>
      <Text style={styles.moviePlot}>{movieDetails.Plot}</Text>
      <Text style={styles.moviePlot}> <Text style={styles.genre}>Genre:  </Text>{movieDetails.Genre}</Text>
      <Text style={styles.moviePlot}><Text style={styles.genre}>IMDb Rating:  </Text>{movieDetails.imdbRating}</Text>
      <Text style={styles.moviePlot}><Text style={styles.genre}>Rated:  </Text>{movieDetails.Rated}</Text>
    </View>
  );
};

export default Movie;
