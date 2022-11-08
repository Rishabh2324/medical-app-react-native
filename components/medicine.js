import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Medicine({
  imageSrc,
  title,
  description,
  style,
  onPress,
}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <View style={styles.upperContainer}>
        <Image style={styles.image} source={{ uri: imageSrc }} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
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
