import React, {useEffect, useState} from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const jwtDecode = require('jwt-decode');

const HomeScreen = props => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState('')

  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      props.navigation.navigate('Login')
    }
    const decoded = jwtDecode(token)
    setFullName(decoded.fullName);
    setEmail(decoded.email);
    console.log(decoded)
  }

  const logout = props => {
    AsyncStorage.removeItem('token')
      .then(() => {
        props.navigation.replace('Login')
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    loadProfile();
  })

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Welcome {fullName ? fullName : ''}</Text>
      </View>
      <View>
        <Text style={styles.text}>Your Email: {email ? email : ''}</Text>
      </View>
      <View>
        <Text style={styles.text}>Your Bio: {email ? email : ''}</Text>
      </View>
      <View>
        <Text style={styles.text}>Your Email: {email ? email : ''}</Text>
      </View>
      <View>

        <Button title="Logout" onPress={() => logout(props)} /> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40
  },
  text: {
    fontSize: 22
  }
})

export default HomeScreen;