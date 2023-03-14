// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contos from './Contos';
import Curiosidades from './Curiosidades';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Contos")}>
        <Text>Contos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Curiosidades")}>
        <Text>Curiosidades</Text>
      </TouchableOpacity>
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
        <Stack.Screen name="Curiosidades" component={Curiosidades} />
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
    marginTop: 25,
  }
})

export default App;