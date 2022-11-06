import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Medicine from '../components/medicine';

export default function MedicinePage({
  imageSrc,
  title,
  description,
  price,
  style,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.loginBtn, { width: '20%' }]}>
        <Text style={styles.loginText}>Back</Text>
      </TouchableOpacity>
      <Medicine imageSrc={imageSrc} title={title} />
      <View style={styles.details}>
        <Image source={imageSrc} />
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },

  details: {
    height: '75%',
  },

  image: {
    borderRadius: 20,
    height: 100,
    resizeMode: 'contain',
    justifyContent: 'center',
  },

  price: {
    color: '#00628B',
    fontWeight: '600',
    fontSize: 36,
  },

  description: {
    color: '#00628B',
    fontWeight: '600',
    fontSize: 20,
  },

  loginBtn: {
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
