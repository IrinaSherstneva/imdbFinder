import * as React from 'react';
import { Button, ScrollView, Text, Image, ImageBackground, View, StyleSheet } from 'react-native';


export default function ResultScreen(props) {
  const { title, description,poster,imdbRating,type,rated,year, genre } = props.route.params;
  console.log(poster)
  return (
    <ImageBackground style={styles.background} source={require('../img/chicagoTheatre.jpg')}>
    <ScrollView contentContainerStyle={styles.screen}>
    
    <Image style={styles.img}
        source={{uri: poster}}
      />
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.text}>{type} ({year})</Text>
      <View style={styles.misc}>
      <Text style={styles.secondary}>Genre: {genre}</Text>
      <Text style={styles.secondary}>Rated: {rated}</Text>
      </View>
      <Text style={styles.rating}>IMDb Rating: {imdbRating}</Text>
      <Text style={styles.text}>{description}</Text>
      <View style={{width: 'inherit', padding: 40}}>
      <Button color='#9a1f40' title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
      
    </ScrollView>
    </ImageBackground>
  );
}
const styles=StyleSheet.create({
  background:{
    alignItems: 'center', 
    justifyContent: 'center',
  },
  misc: {
    width: 'inherit',
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'space-evenly'
  },
  screen: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(223, 219, 219, 0.8)',
    width: 600,
    padding: 40,
  },
  header: {
    marginBottom: 30,
    marginTop: 10,
    fontSize: 45,
    color: '#330a15',
  },
  img: {
    width: 500, 
    height: 500,
    marginVertical: 15,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 40,
    marginBottom: 20,
    color: '#313131'
  },
  secondary: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'grey',
    marginRight: 30,
  },
  rating: {
    color: '#9a1f40',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 40,
    marginVertical: 20,
  }
})