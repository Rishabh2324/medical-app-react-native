import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({
  children,
  pageTitle,
  onPress,
  showCart = true,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.pageTitle}>{pageTitle}</Text>
        {showCart && (
          <TouchableOpacity onPress={onPress}>
            <Image
              style={styles.profileImage}
              source={require('../assets/cart.png')}
            />
          </TouchableOpacity>
        )}
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
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 30,
    height: 30,
  },
});
