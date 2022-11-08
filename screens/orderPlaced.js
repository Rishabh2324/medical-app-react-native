import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { PrimaryButton } from '../components/primaryButton';

export default function OrderPlaced({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/example-logo.jpg')}
      />
      <PrimaryButton
        text="Go Home"
        onPress={() => navigation.push('Dashboard')}
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
});
