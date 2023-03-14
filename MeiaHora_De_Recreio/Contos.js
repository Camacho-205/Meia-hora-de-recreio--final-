// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Contos({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Curiosidades")}>
        <Text>Curiosidades</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button1} onPress={()=> navigation.navigate("Home")}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

//const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({

  Button1:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 25,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },


})

export default Contos;