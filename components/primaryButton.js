import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const PrimaryButton = ({ onPress, text, style, disabled = false }) => {
  return (
    <TouchableOpacity
      style={[styles.loginBtn, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.loginText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
