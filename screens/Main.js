import React, {useState} from 'react'
import { Button, ScrollView, Dimensions,ImageBackground, StyleSheet, TextInput } from 'react-native'
import FilmShortRes from './FilmShortRes'


export default function HomeScreen( props ) {

  const filmQueryByTitle = 'http://www.omdbapi.com/?apikey=e8133543&s='
  const filmQueryById = 'http://www.omdbapi.com/?apikey=e8133543&i='
  const [films,setFilms]=useState([])
  const onChangeText = (input)=>{
    getMoviesFromApiAsync(filmQueryByTitle+input)
    
  }
  function onSubmit (){
      if (typeof films !== 'undefined' && films.length>0){
        return fetch(filmQueryById+films[0].imdbID)
    .then((response) => response.json())
    .then((response)=>{console.log(response);props.navigation.navigate('Result',{title: response.Title, description: response.Plot,
    poster: response.Poster, year: response.Year, imdbRating: response.imdbRating, rated: response.Rated, type: response.Type, genre: response.Genre })})
      }
  }

  const getMoviesFromApiAsync = (input) => {
    return fetch(input)
    .then((response) => response.json())
    .then((json) => setFilms(json.Search))
    .catch((error) => {console.error(error)})
    .then(()=>console.log(films))

  }
  const getFilmInfo=(film)=>{
    console.log(film.imdbID)
    return fetch(filmQueryById+film.imdbID)
    .then((response) => response.json())
    .then((response)=>{console.log(response);props.navigation.navigate('Result',{title: response.Title, description: response.Plot,
    poster: response.Poster, year: response.Year, imdbRating: response.imdbRating, rated: response.Rated, type: response.Type, genre: response.Genre })})
  }

  return (
    <ImageBackground style={styles.screen} source={require('../img/film.jpg')}>
    <ScrollView contentContainerStyle={styles.container}>
  <TextInput
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

const styles= StyleSheet.create({
  container: {
   alignItems: 'stretch',
   marginVertical: 100,
   marginHorizontal: 550,
   padding: 30,
   backgroundColor: 'rgba(223, 219, 219, 0.6)'
  },
  input: {
    height: 40,
    
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom: 20 
  },
  screen: {
    height: Dimensions.get('window').height,
    margin: 0,
  }
})