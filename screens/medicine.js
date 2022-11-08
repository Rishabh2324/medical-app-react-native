import React, { useEffect, useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';

import { StyleSheet, Text, View, Image } from 'react-native';
import { addToCart, fetchMedicine } from '../api';
import Medicine from '../components/medicine';
import { PrimaryButton } from '../components/primaryButton';
import { useAuthContext } from '../context/authContext';
import Home from '../layouts/home';
import { Alert } from 'react-native';

export default function MedicinePage({ route, navigation }) {
  const { itemId } = route.params;
  const { userId } = useAuthContext();

  const [data, setData] = useState({
    image: '',
    name: '',
    description: '',
    price: '',
  });

  const fetchData = async () => {
    const response = await fetchMedicine(itemId);
    setData(response);
  };

  const addItemToCart = async (prescription) => {
    if (prescription) {
      _pickDocument();
    } else await addToCart(userId, itemId, 1);
  };

  const createTwoButtonAlert = (text) =>
    Alert.alert('Selected Prescription', text, [
      { text: 'OK', onPress: async () => await addToCart(userId, itemId, 1) },
    ]);

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    createTwoButtonAlert(result.uri);
  };

  useEffect(() => {
    itemId && fetchData();
  }, [itemId]);

  return (
    <>
      <PrimaryButton
        text="Back"
        onPress={() => navigation.goBack()}
        style={{ width: '20%', marginLeft: 20, marginTop: 20 }}
      />
      <Home
        pageTitle={data.name}
        onPress={() => navigation.push('Cart')}
        children={
          <>
            <View style={styles.container}>
              <Medicine
                imageSrc={data.image}
                title={data.prescriptionRequired && 'Prescription Required'}
              />
              <View style={styles.details}>
                <Image source={{ uri: data.image }} style={styles.image} />
                <Text style={styles.price}>{`${data.price} Rs`}</Text>
                <Text style={styles.description}>{data.description}</Text>
              </View>
              <PrimaryButton
                text="Add to cart"
                onPress={() => addItemToCart(data.prescriptionRequired)}
              />
            </View>
          </>
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },

  details: {
    height: '60%',
  },

  image: {
    borderRadius: 20,
    height: 200,
    resizeMode: 'contain',
    justifyContent: 'center',
    marginTop: 10,
  },

  price: {
    color: '#00628B',
    fontWeight: '600',
    fontSize: 36,
  },

  description: {
    color: '#00628B',
    fontWeight: '600',
    fontSize: 14,
  },
});
