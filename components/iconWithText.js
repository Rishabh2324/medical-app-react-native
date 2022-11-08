import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default function IconWithText({
  imageSrc,
  text,
  style,
  onPress,
  onRightActionPress,
}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.image} source={imageSrc} />
      <Text style={styles.text}>{text}</Text>
      {onRightActionPress && (
        <TouchableOpacity style={style.refill} onPress={onRightActionPress}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3791/3791098.png',
            }}
          />
        </TouchableOpacity>
      )}
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
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },

  text: {
    color: '#00628B',
    fontWeight: '600',
    textAlign: 'center',
  },
});
