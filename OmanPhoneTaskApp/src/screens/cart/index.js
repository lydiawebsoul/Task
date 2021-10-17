import React from 'react';
import {View, Text} from 'react-native';
import Header from './header';
import Styles from './style';

const CartScreen = () => {
  return (
    <View style={Styles.container}>
<Header />
      <Text style={Styles.text}>Cart Screen</Text>
    </View>

  );
};

export default CartScreen;
