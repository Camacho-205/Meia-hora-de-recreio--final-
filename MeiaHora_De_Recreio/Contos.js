// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contos from './Contos';
import Contos from './Curiosidades';
import curiosidades from './Curiosidades';

function Contos({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Contos")}></TouchableOpacity>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Curiosidades")}></TouchableOpacity>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Home")}></TouchableOpacity>
    </View>
  );
}

//const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({

  Button1:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },


})

export default Contos;