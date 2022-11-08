import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function CartItem({
  text,
  quantity,
  style,
  imageSrc,
  onLeftPress,
  onRightPress,
  onRemove,
  disableLeft,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageSrc }} />
      <Text style={styles.text}>{text}</Text>

      <TouchableOpacity
        style={[styles.button, style, { opacity: disableLeft ? 0.5 : 1 }]}
        onPress={onLeftPress}
        disabled={disableLeft}
      >
        <Text style={styles.text}>-</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{quantity}</Text>
      <TouchableOpacity style={[styles.button, style]} onPress={onRightPress}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          style,
          { backgroundColor: '#FF0000', borderColor: '#FF0000' },
        ]}
        onPress={onRemove}
      >
        <Text style={(styles.text, { color: '#FFFFFF' })}> X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 20,
  },

  image: {
    borderRadius: 25,
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },

  text: {
    color: '#00628B',
    fontWeight: '800',
    textAlign: 'center',
  },

  button: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#00628B',
  },
});
