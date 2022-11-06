import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Container from '../components/container';

export default function Home({ children, pageTitle }) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.pageTitle}>{pageTitle}</Text>
        <Image
          style={styles.profileImage}
          source={require('../assets/example-logo.jpg')}
        />
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: 20,
  },
  pageTitle: {
    color: '#00628B',
    fontWeight: '800',
    fontSize: 36,
  },
  profile: {
    height: '10%',
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
