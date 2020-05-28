import * as React from 'react';
import { Button, View,TouchableOpacity, Text, StyleSheet, Image } from 'react-native';


export default function ResultScreen(props) {
    const onPress = ()=>{
        console.log(props.film.imdbID)
    }
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
      width: 300,
    },
    header: {
        fontWeight: 'bold',
    }
  });