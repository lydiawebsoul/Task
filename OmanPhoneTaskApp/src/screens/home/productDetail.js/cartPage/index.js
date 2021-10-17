import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {AppStyle} from '../../../../theme';
import {useCart} from './util';
import Header from './header';
import ItemCard from './itemCard';
import Styles from './style';

const CartPage = () => {
  const {cartItems, totalQty, totalPrice, currency, goBack} = useCart();
  return (
    <View style={AppStyle.container}>
      <Header totalQty={totalQty} goBack={goBack} />
      <View style={{flex: 1}}>
        <FlatList
          contentContainerStyle={{paddingBottom: 55}}
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => <ItemCard item={item} />}
        />
      </View>
      <View style={Styles.cartFooterContainer}>
        <View style={Styles.totalAmtContainer}>
          <Text style={Styles.totalText}>Total</Text>
          <Text style={Styles.amountText}>
            {currency} {totalPrice.toFixed(2)}
          </Text>
        </View>
        <View style={Styles.checkoutBtnContainer}>
          <Text style={Styles.checkoutBtnText}>CHECKOUT</Text>
        </View>
      </View>
    </View>
  );
};

export default CartPage;
