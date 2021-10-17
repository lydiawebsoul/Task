import React from 'react';
import {View, Image, Text} from 'react-native';

import {AppStyle, colors} from '../../theme';
import Styles from './style';

const Header = () => {
  return (
    <View style={Styles.headerContainer}>
        <Text style={Styles.headerTxt}>My Cart</Text>
    </View>
  );
};

export default Header;
