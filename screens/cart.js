import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Home from '../layouts/home';
import Container from '../components/container';
import IconWithText from '../components/iconWithText';

import { cartItems } from '../data/cartItems';

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartItems);
  }, []);

  return (
    <Home
      pageTitle="Your Cart"
      children={
        <>
          {items.length ? (
            <Container style={styles.cartItems}>
              <FlatList
                data={items}
                renderItem={({ item }, index) => (
                  <IconWithText
                    key={index}
                    imageSrc={item.imageSrc}
                    style={styles.menuItem}
                    text={item.itemName}
                  />
                )}
              />
            </Container>
          ) : (
            <Container
              children={<Text style={styles.noItems}>No Items found</Text>}
            />
          )}
          <View style={styles.actionsButtons}>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Back</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Order now</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  navigationMenu: {
    height: '20%',
    marginBottom: 40,
  },

  cartItems: {
    height: '70%',
  },

  menuItem: {
    maxHeight: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  noItems: {
    color: '#81A594',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    padding: 50,
  },

  actionsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  loginBtn: {
    width: '40%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81A594',
  },

  loginText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20,
  },
});
