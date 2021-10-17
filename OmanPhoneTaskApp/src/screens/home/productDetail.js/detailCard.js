import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AppStyle, colors} from '../../../theme';

import Styles from './style';

const DetailCard = ({
  data,
  rating,
  currency,
  initialData,
  itemDetail,
  onChangeOption,
}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={Styles.cardContainer}>
      <Text style={Styles.productNameStyle}>
        {itemDetail?.name || initialData.name || data.name}
      </Text>
      {rating && (
        <View style={Styles.ratingContainer}>
          <MaterialIcons name="star" size={14} color={colors.white} />
          <Text style={Styles.ratingTextStyle}>{rating}</Text>
        </View>
      )}
      <View style={AppStyle.centerAlignedRow}>
        <Text style={Styles.priceTextStyle}>
          {currency}{' '}
          {itemDetail?.price ||
            initialData.price ||
            data.special_price ||
            data.price}
        </Text>
        {data.special_price && (
          <Text style={Styles.mrpTextStyle}>
            {currency} {data.price}
          </Text>
        )}
      </View>
      <View style={Styles.specCardContainer}>
        {data.length !== 0 && (
          <>
            {data.attrs.color !== '' && (
              <View style={[AppStyle.centerAlignedRow, Styles.colorRow]}>
                <Text style={Styles.txt}>color</Text>
                <Image
                  style={Styles.colorImageStyle}
                  source={{uri: data.attrs?.color}}
                />
              </View>
            )}
          </>
        )}

        {data.has_options === 1 && (
          <>
            {data.options &&
              data.options.map(item => (
                <View key={item.attr_id} style={Styles.colorRow}>
                  <Text style={Styles.optionLabelStyle}>{item.label}</Text>
                  <View style={Styles.specBottomContainer}>
                    {item.values.map(item => (
                      <TouchableWithoutFeedback
                        key={item.option_value}
                        onPress={() =>
                          onChangeOption(
                            `${item.option_id}-${item.option_value}`,
                          )
                        }>
                        <View
                          style={[
                            Styles.specCard,
                            {width: (width - 100) / 3},
                            Styles.optionBtnStyle,
                          ]}>
                          <Text style={Styles.optionBtnText}>
                            {item.option_label}
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    ))}
                  </View>
                </View>
              ))}
          </>
        )}

        <View style={Styles.specBottomContainer}>
          {data.attrs &&
            data.attrs.specs.map(item => (
              <View
                key={item.value}
                style={[Styles.specCard, {width: (width - 30) / 3}]}>
                <Image style={Styles.specIconStyle} resizeMode='contain'
                source={{uri: item.icon}} />
                <Text style={Styles.specText}>{item.value}</Text>
              </View>
            ))}
        </View>
      </View>
    </View>
  );
};

export default DetailCard;
