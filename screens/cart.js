import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Home from '../layouts/home';
import Container from '../components/container';
import CartItem from '../components/cartItem';

import { PrimaryButton } from '../components/primaryButton';
import NothingFound from '../components/nothingFound';

import { useAuthContext } from '../context/authContext';
import {
  addToCart,
  fetchCart,
  removeFromCart,
  deleteFromCart,
  fetchTotalPrice,
  placeOrder,
} from '../api';

export default function Cart({ navigation }) {
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(0);

  const { userId } = useAuthContext();

  const fetchData = async () => {
    const response = await fetchCart(userId);
    setItems(response?.medicines || []);
  };

  const addItem = async (itemId) => {
    await addToCart(userId, itemId, 1);
    await fetchData();
  };

  const removeItem = async (itemId, quantity) => {
    await removeFromCart(userId, itemId, quantity);
    await fetchData();
  };

  const deleteItem = async (itemId) => {
    await deleteFromCart(userId, itemId);
    await fetchData();
  };

  const fetchOrderPrice = async () => {
    const response = await fetchTotalPrice(userId);
    setPrice(response || 0);
  };

  const handleOrderNow = async () => {
    const response = await placeOrder(userId);
    console.log(response);
    if (response.isSuccess) navigation.push('OrderPlaced');
  };

  useEffect(() => {
    userId && fetchData();
  }, [userId]);

  useEffect(() => {
    fetchOrderPrice();
  }, [items]);

  return (
    <>
      <PrimaryButton
        text="Back"
        onPress={() => navigation.goBack()}
        style={{ width: '20%', marginLeft: 20, marginTop: 20 }}
      />
      <Home
        pageTitle="Your Cart"
        showCart={false}
        children={
          <>
            {items?.length ? (
              <Container style={styles.cartItems}>
                <FlatList
                  data={items}
                  renderItem={({ item }) =>
                    item.quantity >= 1 && (
                      <CartItem
                        key={item.id}
                        text={item.name}
                        quantity={item.quantity}
                        style={item.cartItem}
                        imageSrc={item.image}
                        onLeftPress={() =>
                          removeItem(item.id, item.quantity - 1)
                        }
                        onRightPress={() => addItem(item.id)}
                        onRemove={() => deleteItem(item.id)}
                        showLeft={item.quantity >= 1}
                      />
                    )
                  }
                />
              </Container>
            ) : (
              <NothingFound text="No Items found" />
            )}
            <View style={styles.actionsButtons}>
              <Text style={styles.totalPrice}>Total: Rs {price}</Text>
              <PrimaryButton
                disabled={price === 0}
                text="Order now"
                onPress={handleOrderNow}
                style={{
                  height: 50,
                  width: 200,
                  opacity: price === 0 ? 0.5 : 1,
                }}
              />
            </View>
          </>
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  navigationMenu: {
    height: '20%',
    marginBottom: 40,
  },

  cartItems: {
    height: '60%',
  },

  menuItem: {
    maxHeight: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  totalPrice: {
    fontSize: 28,
    fontWeight: '700',
    color: '#00628B',
  },

  actionsButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
