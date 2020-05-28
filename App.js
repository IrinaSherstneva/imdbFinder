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
      <Stack.Screen name="Home" component={HomeScreen } options={{headerStyle: {backgroundColor: 'rgba(223, 219, 219, 0.6)'},headerTintColor: 'darkseagreen',
    headerTitleStyle: {
      fontWeight: 'bold',
      alignSelf: 'center',
    },}} />
      <Stack.Screen name="Result" component={ResultScreen } />
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
