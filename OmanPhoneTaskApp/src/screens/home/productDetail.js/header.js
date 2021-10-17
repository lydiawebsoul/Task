import React from 'react';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppStyle, colors} from '../../../theme';

import Styles from './style';

const Header = props => {
  return (
    <View style={Styles.headerContainer}>
      <MaterialIcons
        style={Styles.backIconStyle}
        name="arrow-back"
        size={25}
        color={colors.white}
        onPress={props.goBack}
      />
      <Text style={Styles.headerTitle}>Item Details</Text>
      <View style={AppStyle.centerAlignedRow}>
        <MaterialIcons
          style={Styles.backIconStyle}
          name="search"
          size={25}
          color={colors.white}
        />
        <View style={{paddingRight: 5}}>
          <MaterialIcons
            style={Styles.backIconStyle}
            name="shopping-cart"
            size={25}
            color={colors.white}
            onPress={props.goToCart}
          />
          <View style={Styles.cartQtyContainer}>
            <Text>{props.cartQty}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
