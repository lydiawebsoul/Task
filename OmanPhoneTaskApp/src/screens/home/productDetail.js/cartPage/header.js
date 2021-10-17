import React from 'react';
import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../../theme';

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
      <View style={Styles.headerTitleContainer}>
        <Text style={Styles.headerTitle}>My Cart ({props.totalQty})</Text>
      </View>
    </View>
  );
};

export default Header;
