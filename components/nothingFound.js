import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Container from './container';

export default function NothingFound({ text }) {
  return (
    <Container children={<Text style={styles.nothingFoundText}>{text}</Text>} />
  );
}

const styles = StyleSheet.create({
  nothingFoundText: {
    color: '#81A594',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    padding: 50,
  },
});
