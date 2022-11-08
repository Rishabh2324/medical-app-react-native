import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { PrimaryButton } from '../components/primaryButton';

export default function ComingSoon() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/example-logo.jpg')}
      />
      <PrimaryButton text="Back" onPress={() => navigation.goBack()} />
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
