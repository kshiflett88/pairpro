import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer, StackActions, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ProjectListingScreen from '../screens/ProjectListingScreen';
import AddProjectScreen from '../screens/AddProjectScreen';
import EditProfileScreen from '../screens/EditProfileScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    <Button onPress={() => {navigation.navigate('Edit Profile')}} title="Edit" />
  )
}

function HomeNavigator() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ProjectList" component={ProjectListingScreen} />
        <Tab.Screen name="AddProject" component={AddProjectScreen} />
      </Tab.Navigator>
  )
}

function AppNavigator() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="Home"
          component={HomeNavigator}
          options={{headerLeft: null, headerRight: () => <HeaderRight/>}}
        />
        <Stack.Screen 
          name="Edit Profile"
          component={EditProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;