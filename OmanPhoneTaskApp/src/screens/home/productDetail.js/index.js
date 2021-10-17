import React from 'react';
import {ScrollView, TouchableWithoutFeedback, View, Text} from 'react-native';
import ImageSwiper from '../../../components/imageSwiper/imageSwiper';
import {Card} from 'react-native-paper'
import AboutCard from './aboutCard';
import DetailCard from './detailCard';
import Header from './header';
import SimilarProducts from './similarProducts';
import Styles from './style';
import useProductDetail from './util';

const ProductDetailScreen = () => {
  const {
    productDetailData,
    rating,
    currency,
    noImage,
    relatedProducts,
    isCartItem,
    cartQty,
    itemDetail,
    goBack,
    onPressitem,
    onClickButton,
    goToCart,
    onChangeOption,
  } = useProductDetail();

  const imageUrl =
    productDetailData.image && productDetailData.image.length !== 0
      ? productDetailData.image
      : [noImage];

  const initialData =
    productDetailData.has_options === 1
      ? productDetailData.option_prices[0]
      : [];

  return (
    <View style={{flex: 1,backgroundColor:'white'}}>
      <Header goBack={goBack} goToCart={goToCart} cartQty={cartQty} />
      <ScrollView contentContainerStyle={Styles.scrollContainer}>

        <ImageSwiper
          ImageStyle={Styles.swiperImageStyle}
          data={itemDetail?.image || initialData.image || imageUrl}
        />

        <View style={Styles.contentContainer}>
          <DetailCard
            data={productDetailData}
            rating={rating}
            currency={currency}
            initialData={initialData}
            itemDetail={itemDetail}
            onChangeOption={onChangeOption}
          />
          {productDetailData && productDetailData.description && (
            <AboutCard data={productDetailData.description} />
          )}
          {relatedProducts.length !== 0 && (
            <>
              {relatedProducts.items.length !== 0 && (
                <SimilarProducts
                  data={relatedProducts}
                  noImage={noImage}
                  currency={currency}
                  onPressitem={onPressitem}
                />
              )}
            </>
          )}
        </View>
      </ScrollView>
      <TouchableWithoutFeedback onPress={onClickButton}>
        <View style={Styles.a2cBtnContainer}>
          <Text style={Styles.a2cBtnText}>
            {isCartItem ? 'Go To Cart' : 'Add to Cart'}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ProductDetailScreen;
