import * as React from 'react';
import { Button, ScrollView, Text, Image,Dimensions, ImageBackground, View, StyleSheet } from 'react-native';
import '@expo/match-media'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import 'react-native-match-media-polyfill'


export default function ResultScreen(props) {
  // const isTabletOrMobileDevice = useMediaQuery({    
  //   maxDeviceWidth: 1224,
  // });
   const isTabletOrMobileDevice = useMediaQuery('(max-width:1224px)');

  const { title, description,poster,imdbRating,type,rated,year, genre } = props.route.params;

  return (
    <ImageBackground style={styles.background} source={require('../img/chicagoTheatre.jpg')}>
    <ScrollView contentContainerStyle={styles.screen}>
    
    <Image style={isTabletOrMobileDevice? styles.imgMobile : styles.imgPC}
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
      <View style={{width: 0.87*width, marginTop: 17}}>
      <Button color='#9a1f40' title="Go back" onPress={() => props.navigation.goBack()} />
      </View>
      
    </ScrollView>
    </ImageBackground>
  );
  
}
var {height, width} = Dimensions.get('window');
const styles=StyleSheet.create({
  background:{
    alignItems: 'center', 
    justifyContent: 'center',
    flex: 1,
  },
  misc: {
    marginTop: 0.02*height,
    width: 0.87*width,
    flexDirection:'row', 
    flexWrap:'wrap',
    justifyContent: 'space-evenly'
  },
  screen: { 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'rgba(223, 219, 219, 0.9)',
    width: 0.95*width,
    padding: 0.02*height,
  },
  header: {
    marginVertical: 0.01*height,
    fontSize: 35,
    color: '#330a15',
  },
  imgPC: {
    // marginHorizontal: 0.02*height,
    
    marginVertical: 0.02*height,
  },
  imgMobile: {
    width: 0.87*width,
    height: 0.6*height,
    marginVertical: 0.02*height,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 30,
    marginBottom: 0.01*height,
    color: '#313131'
  },
  secondary: {
    //fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginRight: 0.01*width,
  },
  rating: {
    color: '#9a1f40',
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 0.03*height,
  }
})