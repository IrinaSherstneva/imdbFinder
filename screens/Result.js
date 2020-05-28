import * as React from 'react';
import { Button, ScrollView, Text, Image, StyleSheet } from 'react-native';


export default function ResultScreen(props) {
  const { title, description,poster,imdbRating,type,rated,year, genre } = props.route.params;
  console.log(poster)
  return (
    <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image style={styles.img}
        source={{uri: poster}}
      />
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.text}>{year}</Text>
      <Text style={styles.text}>{type}</Text>
      <Text style={styles.text}>Rated: {rated}</Text>
      <Text style={styles.text}>Genre: {genre}</Text>
      <Text style={styles.text}>IMDb Rating: {imdbRating}</Text>
      <Text style={styles.text}>{description}</Text>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </ScrollView>
  );
}
const styles=StyleSheet.create({
  header: {
    fontWeight:900,
    marginBottom: 30,
    fontSize: 20,
  },
  img: {
    width: 400, 
    height: 500,
    marginVertical: 30,
  },
  text: {
    fontSize: 14,
    lineHeight: 2,
    marginBottom: 20,
  }
})