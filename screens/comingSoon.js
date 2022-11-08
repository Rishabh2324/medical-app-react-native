import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { PrimaryButton } from '../components/primaryButton';

export default function ComingSoon({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/example-logo.jpg')}
      />
      <Text style={styles.text}>UNDER CONSTRUCTION</Text>
      <PrimaryButton
        style={styles.button}
        text="Back"
        onPress={() => navigation.goBack()}
      />
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
    height: 200,
    width: 200,
  },

  text: {
    fontWeight: '600',
    fontSize: 28,
    margin: 10,
  },
  button: {
    height: 50,
    width: 100,
  },
});
