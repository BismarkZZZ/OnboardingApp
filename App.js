import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import AddCart from './src/screens/AddCart';
import OnlineShopping from './src/screens/OnlineShopping';
import PaymentSucessful from './src/screens/PaymentSucessful';


const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7649aa'
        },
        headerTintColor: "#fff"
      }}
      >
        <Stack.Screen 
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#7649aa'
          },
          headerTintColor: "#fff"
        }}
        name='Online Shopping' 
        component={OnlineShopping} />
        <Stack.Screen 
        options={{
          title: 'Cart'
        }}
        name='Add To Cart' component={AddCart} />
        <Stack.Screen 
        options={{
          title: 'Payment'
        }}
        name='Payment Sucessful' component={PaymentSucessful} />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

