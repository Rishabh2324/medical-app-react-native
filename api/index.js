import axios from 'axios';
import notifyMessage from '../components/toast';

const IP = '192.168.29.206:8080';

const fetchTransactions = async (userId, pageSize = 999) => {
  try {
    return axios
      .get(`http://${IP}/transactions/list/0/${pageSize}`, {
        headers: { USER_ID: userId },
      })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchMedicines = async () => {
  try {
    return axios.get(`http://${IP}/medicine`).then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchMedicine = async (id) => {
  try {
    return axios
      .get(`http://${IP}/medicine/id/${id}`)
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

const addToCart = async (userId, id, quantity) => {
  try {
    return axios
      .get(`http://${IP}/medicine/add/${id}/${quantity}`, {
        headers: { USER_ID: userId },
      })
      .then(() => {
        notifyMessage('Added to cart');
      });
  } catch (error) {
    console.log(error);
  }
};

const removeFromCart = async (userId, id, quantity) => {
  try {
    return axios
      .get(`http://${IP}/medicine/update/${id}/${quantity}`, {
        headers: { USER_ID: userId },
      })
      .then(() => {
        notifyMessage('Removed from cart');
      });
  } catch (error) {
    console.log(error);
  }
};

const deleteFromCart = async (userId, id) => {
  try {
    return axios
      .delete(`http://${IP}/medicine/remove/${id}`, {
        headers: { USER_ID: userId },
      })
      .then(() => {
        notifyMessage('Removed from cart');
      });
  } catch (error) {
    console.log(error);
  }
};

const fetchCart = async (userId) => {
  try {
    return axios
      .get(`http://${IP}/cart`, {
        headers: { USER_ID: userId },
      })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchTotalPrice = async (userId) => {
  try {
    return axios
      .get(`http://${IP}/cart/totalprice`, {
        headers: { USER_ID: userId },
      })
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

const placeOrder = async (userId) => {
  try {
    return axios
      .post(
        `http://${IP}/order`,
        {},
        {
          headers: { USER_ID: userId },
        }
      )
      .then((response) => {
        notifyMessage('Order Placed');
        return { isSuccess: true };
      });
  } catch (error) {
    console.log(error);
  }
};

const refillTransacition = async (userId, transactionId) => {
  try {
    return axios
      .get(
        `http://${IP}/transactions/refill/${transactionId}`,
        {
          headers: { USER_ID: userId },
        },
        {}
      )
      .then((response) => {
        notifyMessage('Transaction Refilled');
        return response.data;
      });
  } catch (error) {
    console.log(error);
  }
};

const searchMedicine = (query) => {
  try {
    return axios
      .get(`http://${IP}/medicine/${query}`)
      .then((response) => response.data);
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchTransactions,
  fetchMedicines,
  fetchMedicine,
  fetchCart,
  addToCart,
  removeFromCart,
  deleteFromCart,
  fetchTotalPrice,
  placeOrder,
  refillTransacition,
  searchMedicine,
};
