import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Home from '../layouts/home';
import Container from '../components/container';
import IconWithText from '../components/iconWithText';
import Medicine from '../components/medicine';

import { tansactionData } from '../data/transaction';
import { medicines } from '../data/medicine';

export default function OrderMedicine() {
  const [tansactions, setTansactions] = useState([]);

  useEffect(() => {
    setTansactions(tansactionData);
  }, []);

  return (
    <Home
      pageTitle="Medicines"
      children={
        <>
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
          <SearchBar
            containerStyle={styles.searchBar}
            placeholder="Search Here..."
            lightTheme
            round
            value={''}
            onChangeText={() => null}
            autoCorrect={false}
          />
          <Container style={styles.medicinesList}>
            <FlatList
              data={medicines}
              renderItem={({ item }, index) => (
                <Medicine
                  key={index}
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                  style={styles.medicine}
                />
              )}
            />
          </Container>
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
    height: '15%',
  },

  medicinesList: {
    marginTop: 10,
    height: '50%',
  },

  medicine: {
    maxHeight: 150,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  menuItem: {
    maxHeight: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
  },

  searchBar: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  noTransactionText: {
    color: '#81A594',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    padding: 50,
  },
});
