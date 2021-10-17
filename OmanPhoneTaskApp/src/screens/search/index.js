import React from 'react';
import {View, Text} from 'react-native';
import Header from './header';
import Styles from './style';

const SearchScreen = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <Text style={Styles.text}>Search Screen</Text>
    </View>
  );
};

export default SearchScreen;
