import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateCart, deleteCart} from '../../../../store/actions/cartAction';

const useCart = () => {
  const navigation = useNavigation();

  const cartItems = useSelector(state => state.cart.cart);
  const totalQty = useSelector(state => state.cart.cartQty);
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const config = useSelector(state => state.appSetting.config);

  const currency = config.length === 0 ? ' ' : config.data.currency;

  const goBack = () => navigation.goBack();

  return {
    cartItems,
    totalQty,
    totalPrice,
    currency,
    goBack,
  };
};

const useItem = item => {
  const [count, setCount] = useState(1);
  const config = useSelector(state => state.appSetting.config);
  const dispatch = useDispatch();

  const currency = config.length === 0 ? ' ' : config.data.currency;
  const noImage = config.length === 0 ? [] : config.data.noimg;

  useEffect(() => {
    setCount(item.quantity);
  }, []);

  const incrementOne = item => {
    dispatch(
      updateCart({
        id: item.id,
        quantity: count + 1,
        sellingPriceTotal: item.special_price
          ? (count + 1) * item.special_price
          : (count + 1) * item.price,
      }),
    );
    setCount(count => count + 1);
  };

  const deleteItem = item => {
    Alert.alert(
      'Confirm',
      'Are you sure you want to remove this item from cart ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {text: 'OK', onPress: () => dispatch(deleteCart({id: item.id}))},
      ],
    );
  };

  const decrementOne = item => {
    if (count === 1) {
      deleteItem(item);
    } else {
      dispatch(
        updateCart({
          id: item.id,
          quantity: count - 1,
          sellingPriceTotal: item.special_price
            ? (count - 1) * item.special_price
            : (count - 1) * item.price,
        }),
      );
      setCount(count => count - 1);
    }
  };

  return {
    count,
    noImage,
    currency,
    incrementOne,
    decrementOne,
    deleteItem,
  };
};

export {useCart, useItem};
