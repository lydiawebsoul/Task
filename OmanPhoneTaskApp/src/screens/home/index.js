import React from 'react';
import {View, ScrollView} from 'react-native';
import ImageSwiper from '../../components/imageSwiper/imageSwiper';
import {AppStyle} from '../../theme';
import Header from './header';
import ProductCard from './productCard';
import Styles from './style';
import useHome from './util';

const HomeScreen = () => {
  const {config, products, onPressitem} = useHome();
  const bannerImages = config.length === 0 ? [] : config.data.slider;
  const noImage = config.length === 0 ? [] : config.data.noimg;
  const currency = config.length === 0 ? ' ' : config.data.currency;

  return (
    <ScrollView>
      <View style={AppStyle.container}>
        <Header />
        <ImageSwiper data={bannerImages} />
        {products.map((item, index) => (
          <ProductCard
            key={index}
            data={item}
            onPressitem={onPressitem}
            noImage={noImage}
            currency={currency}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
