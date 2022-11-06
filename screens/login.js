import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useAuthContext } from '../context/useAuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setDisabled(false);
    } else setDisabled(true);
  }, [email, password]);

  const { signIn } = useAuthContext();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/example-logo.jpg')}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.actionsButtons}>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.loginBtn, { opacity: disabled ? 0.8 : 1 }]}
          disabled={disabled}
          onPress={() => !disabled && signIn({ email, password })}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
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
    width: '40%',
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
