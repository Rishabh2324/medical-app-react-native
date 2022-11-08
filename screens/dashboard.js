import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Home from '../layouts/home';
import Container from '../components/container';
import IconWithText from '../components/iconWithText';
import NothingFound from '../components/nothingFound';

import { fetchTransactions } from '../api';
import { navigationLinks } from '../data/navaigaion';
import { useAuthContext } from '../context/authContext';
import { TouchableOpacity } from 'react-native';

export default function Dashboard({ navigation }) {
  const { userId } = useAuthContext();
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const response = await fetchTransactions(userId);
    setTransactions(response);
  };

  useEffect(() => {
    userId && fetchData();
  }, [userId]);

  return (
    <Home
      pageTitle="Dashboard"
      onPress={() => navigation.push('Cart')}
      children={
        <>
          <Container style={styles.navigationMenu}>
            {navigationLinks.map((item, index) => (
              <IconWithText
                key={index}
                style={styles.menuItem}
                imageSrc={item.imageSrc}
                text={item.text}
                onPress={() => navigation.push(item.path)}
              />
            ))}
          </Container>
          <View style={styles.view}>
            <Text style={styles.text}>Transactions</Text>
            <TouchableOpacity onPress={fetchData}>
              <Text style={styles.text}>Refresh</Text>
            </TouchableOpacity>
          </View>
          {transactions?.length ? (
            <Container style={styles.tansactions}>
              <FlatList
                data={transactions}
                renderItem={({ item }) => (
                  <IconWithText
                    key={item.id}
                    imageSrc={{
                      uri: 'https://icon-library.com/images/order-icon/order-icon-18.jpg',
                    }}
                    style={styles.menuItem}
                    text={`OrderId: ${item.id}, Date: ${new Date(
                      item.createdAt || ''
                    ).toLocaleDateString()}, ${item.amount}Rs`}
                  />
                )}
              />
            </Container>
          ) : (
            <NothingFound text="No Transactions found" />
          )}
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

  tansactions: {
    height: '50%',
  },

  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#00628B',
    fontWeight: '600',
    fontSize: 20,
    marginBottom: 10,
  },

  menuItem: {
    maxHeight: 50,
    marginBottom: 10,
    margin: 20,
  },
});
