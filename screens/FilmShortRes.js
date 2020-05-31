import * as React from 'react';
import { Button, View,TouchableOpacity, Text, StyleSheet, Image } from 'react-native';


export default function ResultScreen(props) {
 
    return (
        <TouchableOpacity
        style={styles.button}
        onPress={props.onClick}
      >
        <Text style={styles.header}>{props.film.Title}</Text>
        <Text>{props.film.Year+' ('+props.film.Type+')'}</Text>
      </TouchableOpacity>
     ) 
}

const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      padding: 10,
      margin: 10,
      // width: 300,
    },
    header: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
  });