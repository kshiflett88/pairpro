import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'

const RegisterScreen = navData => {

  return (
   <KeyboardAvoidingView
      behavior="padding"
      style={{flex: 1}}
    >
      <ScrollView>
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: ""
          }}
          onSubmit={(values) => {
            console.log(values)
            navData.navigation.navigate('Home')
          }}
        >
          {(props) => (
            <View style={styles.container}>
              <View style={styles.logo}>
                <Image source={require('../assets/images/pairpro.png')} style={styles.image} />
              </View>
              <View>
                <TextInput 
                  style={styles.input} 
                  placeholder="Full Name"
                  placeholderTextColor="#fff"
                  onChangeText={props.handleChange('fullName')} //corressponds to initialValues
                  value={props.values.fullName}
                />
                <TextInput 
                  style={styles.input} 
                  placeholder="Email"
                  placeholderTextColor="#fff"
                  keyboardType="email-address"
                  onChangeText={props.handleChange('email')} //corressponds to initialValues
                  value={props.values.email}
                />
                 <TextInput 
                  style={styles.input} 
                  placeholder="Password"
                  placeholderTextColor="#fff"
                  secureTextEntry={true}
                  onChangeText={props.handleChange('password')} //corressponds to initialValues
                  value={props.values.password}
                />
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={props.handleSubmit}
                >
                  <Text style={styles.buttonText} >Register</Text>
                </TouchableOpacity>
                <View style={styles.registerContainer}>
                  <Text style={styles.registerText}>Have an account?</Text>
                  <TouchableOpacity onPress={() => navData.navigation.navigate('Login')} >
                    <Text style={styles.registerButton}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    alignItems: 'center',
    marginVertical: 40
  },
  image: {
    width: 300,
    height: 300
  },
  input: {
    width: 300, 
    backgroundColor: '#B6BFC4',
    borderRadius: 25,
    padding: 16, 
    fontSize: 16,
    marginVertical: 10
  }, 
  button: {
    width: 300,
    backgroundColor: '#738289',
    borderRadius: 25, 
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  registerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16, 
    flexDirection: 'row'
  },
  registerText: {
    color: '#738289',
    fontSize: 16
  },
  registerButton: {
    color: '#738289',
    fontSize: 16,
    fontWeight: 'bold'
  },
  error: {
    color: 'red'
  }
})

export default RegisterScreen;