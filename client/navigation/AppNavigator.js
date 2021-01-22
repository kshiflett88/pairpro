import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;