// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contos from './Contos';
import Contos from './Curiosidades';
import curiosidades from './Curiosidades';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Contos")}></TouchableOpacity>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Curiosidades")}></TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Contos" component={Contos} />
        <Stack.Screen name="Curiosidades" component={curiosidades} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  Button1:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
})

export default App;