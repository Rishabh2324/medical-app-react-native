import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useAuthContext } from '../context/authContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (username.length > 0 && password.length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  }, [username, password]);

  const { state, signIn } = useAuthContext();

  React.useEffect(() => {
    console.log(state);
  }, [state]);

  const handleLogin = (username, password) => {
    const data = {
      username: username,
      password: password,
    };
    axios
      .post('http://192.168.29.206:8080/user', data)
      .then(function (response) {
        console.log('USER LOGGED IN');
        const { userId, username } = response.data;
        if (userId && username) {
          signIn(userId);
        } else {
          console.log('Incorrect username and passeword');
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/appLogo.png')} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.actionsButtons}>
        <TouchableOpacity
          style={[styles.loginBtn, { opacity: disabled ? 0.8 : 1 }]}
          disabled={disabled}
          onPress={() => !disabled && handleLogin(username, password)}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },

  inputView: {
    backgroundColor: '#E6E6DC',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 30,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginTop: 20,
    fontWeight: '600',
  },

  actionsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },

  loginBtn: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81A594',
  },

  loginText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
