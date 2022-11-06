import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Medicine({ imageSrc, title, description, style }) {
  return (
    <View style={style}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={imageSrc} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    borderRadius: 20,
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  title: {
    color: '#00628B',
    fontWeight: '600',
    fontSize: 20,
  },

  description: {
    color: '#00628B',
  },
});
