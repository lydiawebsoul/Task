import React from 'react';
import {View, Text} from 'react-native';
import ItemCard from '../../../components/productItemCard';
import Styles from './style';

const SimilarProducts = props => {
  return (
    <View style={[Styles.cardContainer, {paddingHorizontal: 0}]}>
      <Text style={Styles.productCardtitle}>SimilarProducts</Text>
      {props.data.items && (
        <View style={Styles.itemRow}>
          {props.data.items.map(item => (
            <ItemCard
              key={item.id}
              item={item}
              noImage={props.noImage}
              currency={props.currency}
              onPress={() => props.onPressitem(item.id, item.rating)}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default SimilarProducts;
