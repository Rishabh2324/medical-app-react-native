import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default function IconWithText({ imageSrc, text, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.image} source={imageSrc} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  text: {
    color: '#00628B',
    fontWeight: '600',
    width: '100%',
    textAlign: 'center',
  },
});
