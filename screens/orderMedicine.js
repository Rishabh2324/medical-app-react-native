import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Home from '../layouts/home';
import Container from '../components/container';
import IconWithText from '../components/iconWithText';
import Medicine from '../components/medicine';

import {
  fetchMedicines,
  fetchTransactions,
  refillTransacition,
  searchMedicine,
} from '../api';

import { useMedicineContext } from '../context/medicineContext';
import NothingFound from '../components/nothingFound';
import { PrimaryButton } from '../components/primaryButton';

import { useAuthContext } from '../context/authContext';

export default function OrderMedicine({ navigation }) {
  const { setMedicines, medicines } = useMedicineContext();
  const [query, setQuery] = useState('');
  const { userId } = useAuthContext();

  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    const response = await fetchMedicines();
    setMedicines(response);
  };

  const fetchTransaction = async () => {
    const response = await fetchTransactions(userId, 3);
    setTransactions(response);
  };

  const refill = async (transactionId) => {
    const response = await refillTransacition(userId, transactionId);
    setTransactions(response);
  };

  const handleSearch = async (query) => {
    setQuery(query);
    if (query.length > 0) {
      const response = await searchMedicine(query);
      console.log(response);
      setMedicines(response);
    } else {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
    fetchTransaction();
  }, []);

  return (
    <>
      <PrimaryButton
        text="Back"
        onPress={() => navigation.goBack()}
        style={{ width: '20%', marginLeft: 20, marginTop: 20 }}
      />
      <Home
        pageTitle="Medicines"
        onPress={() => navigation.push('Cart')}
        children={
          <>
            {transactions.slice(0, 3)?.length ? (
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
                      onRightActionPress={() => refill(item.id)}
                    />
                  )}
                />
              </Container>
            ) : (
              <NothingFound text="No Transactions found" />
            )}
            <SearchBar
              containerStyle={styles.searchBar}
              placeholder="Search Here..."
              lightTheme
              round
              value={query}
              onCancel={() => handleSearch(text)}
              onChangeText={(text) => handleSearch(text)}
              autoCorrect={false}
            />
            {medicines?.length ? (
              <Container style={styles.medicinesList}>
                <FlatList
                  data={medicines}
                  renderItem={({ item }) => (
                    <Medicine
                      key={item.id}
                      imageSrc={item.image}
                      title={item.name}
                      description={item.description}
                      style={styles.medicine}
                      onPress={() =>
                        navigation.push('MedicinePage', {
                          itemId: item.id,
                        })
                      }
                    />
                  )}
                />
              </Container>
            ) : (
              <NothingFound text="No medicines in store" />
            )}
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

  tansactions: {
    height: '23%',
  },

  medicinesList: {
    marginTop: 10,
    height: '40%',
  },

  medicine: {
    maxHeight: 150,
    marginBottom: 10,
    margin: 20,
  },

  menuItem: {
    maxHeight: 50,
    marginBottom: 10,
    margin: 20,
  },

  searchBar: {
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
});
