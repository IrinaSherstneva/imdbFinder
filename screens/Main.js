import React, {useState} from 'react'
import { Button, ScrollView, Dimensions,ImageBackground, StyleSheet, TextInput } from 'react-native'
import FilmShortRes from './FilmShortRes'


export default function HomeScreen( props ) {

  const filmQueryByTitle = 'http://www.omdbapi.com/?apikey=e8133543&s='
  const filmQueryById = 'http://www.omdbapi.com/?apikey=e8133543&plot=full&i='
  const [films,setFilms]=useState([])
  const onChangeText = (input)=>{
    getMoviesFromApiAsync(filmQueryByTitle+input)
    
  }
  function onSubmit (){
      if (typeof(films) !== 'undefined' && films.length){
    return fetch(filmQueryById+films[0].imdbID)
    .then((response) => response.json())
    .then((response)=>{props.navigation.navigate('Result',{title: response.Title, description: response.Plot,
    poster: response.Poster, year: response.Year, imdbRating: response.imdbRating, rated: response.Rated, type: response.Type, 
    genre: response.Genre })})
    .catch((error) => {console.error(error)})
      }
  }

  const getMoviesFromApiAsync = (input) => {
    return fetch(input)
    .then((response) => response.json())
    .then((json) => setFilms(json.Search))
    .catch((error) => {console.error(error)})

  }
  const getFilmInfo=(film)=>{
    return fetch(filmQueryById+film.imdbID)
    .then((response) => response.json())
    .then((response)=>{props.navigation.navigate('Result',{title: response.Title, description: response.Plot,
    poster: response.Poster, year: response.Year, imdbRating: response.imdbRating, rated: response.Rated, type: response.Type, genre: response.Genre })})
    .catch((error) => {console.error(error)})
  }

  return (
    <ImageBackground style={styles.screen} source={require('../img/film.jpg')}>
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps={'handled'}>
  <TextInput blurOnSubmit={true}
      style={styles.input}
      onChangeText={text => onChangeText(text)}
      
    />
    {typeof films !== 'undefined' && films.map(film=>{return (<FilmShortRes key={film.imdbID} film={film} onClick={()=>getFilmInfo(film)}/>)}) }
      <Button color='#9a1f40'
        title="Search"
        onPress={onSubmit}
      />
    </ScrollView>
    </ImageBackground>
  );
}
var {height, width} = Dimensions.get('window');
const styles= StyleSheet.create({
  container: {
   alignItems: 'stretch',
  //  marginVertical: 0.1*height,
   width: 300,
   padding: 30,
   backgroundColor: 'rgba(223, 219, 219, 0.8)',
   borderRadius: 10
  },
  input: {
    height: 40,
    paddingLeft: 10,
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20
  },
  screen: {
    // height: Dimensions.get('window').height,
    paddingTop: 0.1*height,
    flex: 1,
    margin: 0,
    alignItems: 'center',
  }
})