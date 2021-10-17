import axios from 'axios';
import {Alert} from 'react-native';
import {API_HEADER, BASE_URL} from './Config';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  headers: API_HEADER,
});

const getData = async (url, params) => {
  try {
    const res = await api.get(url, {params});
    if (res.data.status === 'Success' || 200) {
      return res.data;
    } else {
      Alert.alert('Error', res.data[0]);
    }
  } catch (error) {
    if (error.response) {
      Alert.alert('Error', error.response.data.message);
    } else if (error.request) {
      Alert.alert('Error', error.request);
    } else {
      Alert.alert('Error', error.message);
    }
  }
};

export {getData};
