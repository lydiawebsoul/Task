import React from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppStyle, colors} from '../../theme';
import Styles from './style';

const ItemCard = ({item, onPress, noImage, currency}) => {
  const {width} = useWindowDimensions();

  const imageUrl = `https://omanphone.smsoman.com/pub/media/catalog/product/${item.image}`;

  // console.log('ITEM', imageUrl);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[Styles.itemCardContainer, {margin:'.2%',left:'1%'}]}>
        <Image
          style={Styles.itemImageStyle}
          source={{
            uri: item.image ? imageUrl : noImage,
          }}
        />
        <Text style={Styles.itemNameStyle}>{item.name}</Text>
        <View style={AppStyle.centerAlignedRow}>
          <Text style={Styles.priceTextStyle}>
            {currency} {item.special_price ? item.special_price : item.price}
          </Text>
          {item.special_price && (
            <Text style={Styles.mrpTextStyle}>
              {currency} {item.price}
            </Text>
          )}
        </View>
        {item.storage && (
          <View style={Styles.storageTextContainer}>
            <Text style={Styles.storageTextStyle}>{item.storage}</Text>
          </View>
        )}
        {item.rating && (
          <View style={Styles.ratingContainer}>
            <MaterialIcons name="star" size={14} color={colors.white} />
            <Text style={Styles.ratingTextStyle}>{item.rating}</Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ItemCard;
