import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <Text style={styles.h1}>Login</Text>
        <View style={styles.wrapper}>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => setUsername(text)}
              value={username}
            />
          </View>
          <View style={styles.textInputWrapper}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              value={password}
            />
          </View>
          <View>
            <Button color="#f4511e" title="Login" />
          </View>
          <View style={styles.registrationContainer}>
            <Text>Dont have account?</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  h1: {
    fontSize: 22,
    color: '#f4511e',
  },
  textInputWrapper: {
    borderWidth: 2,
    borderRadius: 5,
    margin: 5,
    borderColor: '#f4511e',
  },
  textInput: {
    height: 40,
    width: 200,
  },
  registrationContainer: {
    paddingTop: 5,
    display: 'flex',
    alignItems: 'flex-end',
  },
});

export default Login;
