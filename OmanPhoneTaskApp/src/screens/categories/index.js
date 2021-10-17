import React from 'react';
import {View, Text,Dimension,Image} from 'react-native';
import ImageSwiper from '../../components/imageSwiper/imageSwiper';
import Header from './header';
import Styles from './style';
import useHome from './util';

const CategoriesScreen = () => {
  const {config} = useHome();
  const categoryImg = config.length === 0 ? [] : config.data.catimages.img;
console.log('catimg',categoryImg);

  return (
    <View style={Styles.container}>
    <Header />
    <Text style={Styles.text}>Categories Screen</Text>
    </View>
  );
};

export default CategoriesScreen;
