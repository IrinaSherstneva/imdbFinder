import * as React from 'react';
import { Button, View, StyleSheet,Text, PickerIOSComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Main'
import ResultScreen from './screens/Result'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen } options={{headerStyle: {backgroundColor: '#393e46',margin: 0,},headerTintColor: '#393e46'}} />
      <Stack.Screen name="Result" component={ResultScreen} options={{headerStyle: {backgroundColor: '#393e46',margin: 0,},headerTintColor: '#fff'}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
