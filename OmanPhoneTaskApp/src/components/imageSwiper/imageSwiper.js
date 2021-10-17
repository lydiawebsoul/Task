import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {colors} from '../../theme';

import Styles from './style';

const ImageSwiper = ({data, ImageStyle}) => {
  return (
    <View style={Styles.SwiperContainer}>
      <Swiper
        paginationStyle={Styles.paginationStyle}
        dot={<View style={Styles.dotStyle} />}
        activeDot={<View style={Styles.activeDotStyle} />}
        activeDotColor={colors.white}
        autoplay={true}
        showsButtons={false}
        showsPagination={true}>
        {data.map(item => (
          <Image
            key={item}
            style={[Styles.swiperImage, ImageStyle]}
            source={{
              uri: item.image ? item.image : item,
            }}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default ImageSwiper;
