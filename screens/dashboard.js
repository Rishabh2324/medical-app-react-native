import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../layouts/home';
import Container from '../components/container';
import IconWithText from '../components/iconWithText';

import { tansactionData } from '../data/transaction';
import { navigationLinks } from '../data/navaigaion';

export default function Dashboard({ route, navigation }) {
  const [tansactions, setTansactions] = useState([]);

  useEffect(() => {
    setTansactions(tansactionData);
  }, []);

  return (
    <Home
      pageTitle="Dashboard"
      children={
        <>
          <Container style={styles.navigationMenu}>
            {navigationLinks.map((item, index) => (
              <IconWithText
                key={index}
                style={styles.menuItem}
                imageSrc={item.imageSrc}
                text={item.text}
              />
            ))}
          </Container>
          {tansactions.length ? (
            <Container style={styles.tansactions}>
              <FlatList
                data={tansactionData}
                renderItem={({ item }, index) => (
                  <IconWithText
                    key={index}
                    imageSrc={item.imageSrc}
                    style={styles.menuItem}
                    text={item.text}
                    onPress={() =>
                      navigation.push('MedicinePage', {
                        itemId: Math.floor(Math.random() * 100),
                      })
                    }
                  />
                )}
              />
            </Container>
          ) : (
            <Container
              children={
                <Text style={styles.noTransactionText}>
                  No Transactions found
                </Text>
              }
            />
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

  menuItem: {
    maxHeight: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  noTransactionText: {
    color: '#81A594',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    padding: 50,
  },
});
