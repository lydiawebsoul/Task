import React from 'react';
import {View, Text} from 'react-native';
import ImageSwiper from '../../components/imageSwiper/imageSwiper';
import ItemCard from '../../components/productItemCard';

import {AppStyle} from '../../theme';
import Styles from './style';

const ProductCard = ({data, onPressitem, noImage, currency}) => {
  return (
    <View style={Styles.productCardContainer}>
      {data.type === 'banner' ? (
        <ImageSwiper data={[data.data.file]} />
      ) : (
        <>
          <View style={[AppStyle.centerAlignedRow, Styles.cardRow]}>
            <Text style={Styles.cardTitleStyle}>{data.data.title}</Text>
            <View style={Styles.viewAllBtnContainer}>
              <Text style={Styles.viewAllBtnText}>VIEW ALL</Text>
            </View>
          </View>

          {data.data.items && (
            <View style={Styles.itemRow}>
              {data.data.items.map(item => (
                <ItemCard
                  key={item.id}
                  item={item}
                  noImage={noImage}
                  currency={currency}
                  onPress={() => onPressitem(item.id, item.rating)}
                />
              ))}
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default ProductCard;
