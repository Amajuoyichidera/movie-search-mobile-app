import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Movie from './screens/Movie';
import Search from './screens/Search';
import Home from './screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="MovieSearch" options={{ headerTintColor: 'black'}}  component={Search} />
        <Stack.Screen name="MovieDetails" options={{ headerTintColor: 'black'}}  component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
