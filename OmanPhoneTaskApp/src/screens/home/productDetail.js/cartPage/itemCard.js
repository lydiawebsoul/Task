import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Styles from './style';
import {useItem} from './util';

const ItemCard = props => {
  const {count, noImage, currency, incrementOne, decrementOne, deleteItem} =
    useItem(props.item);

  return (
    <View style={Styles.cardContainer}>
      <View style={Styles.leftCard}>
        <Text style={Styles.productNameStyle}>{props.item.name}</Text>
        <View style={Styles.priceContainer}>
          <Text style={Styles.priceText}>
            {currency}{' '}
            {props.item.special_price
              ? props.item.special_price
              : props.item.price}
          </Text>
        </View>
      </View>
      <View style={Styles.rightCard}>
        <Image
          style={Styles.imageStyle}
          source={{
            uri:
              props.item?.image?.length !== 0 ? props.item?.image[0] : noImage,
          }}
        />
        <View style={Styles.countBtnContainer}>
          <MaterialIcons
            style={Styles.deleteBtnStyle}
            name="delete"
            size={25}
            color="rgba(0,0,0,0.6)"
            onPress={() => deleteItem(props.item)}
          />
          <TouchableWithoutFeedback onPress={() => decrementOne(props.item)}>
            <View style={Styles.countBtnStyle}>
              <Text style={Styles.countBtnText}>-</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text style={Styles.countTextStyle}>{count}</Text>
          <TouchableWithoutFeedback onPress={() => incrementOne(props.item)}>
            <View style={Styles.countBtnStyle}>
              <Text style={Styles.countBtnText}>+</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default ItemCard;
