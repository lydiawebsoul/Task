import {useCallback, useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductDetials, fetchRelatedProducts} from '../../../api';
import {
  addtoCart,
  getProductDetail,
  getRelatedProducts,
  isCartItem as isCartItemAcion,
} from '../../../store/actions';

const useProductDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [optionId, setOptionId] = useState(null);
  const [itemDetail, setItemDetail] = useState([]);
  const dispatch = useDispatch();

  const config = useSelector(state => state.appSetting.config);
  const productDetailData = useSelector(
    state => state.productDetail.productDetails,
  );
  const relatedProducts = useSelector(
    state => state.productDetail.relatedProducts,
  );
  const isCartItem = useSelector(state => state.cart.isCartItem);
  const cartQty = useSelector(state => state.cart.cartQty);

  const filterOptionItem = () => {
    const itemData = productDetailData.option_prices.filter(
      item => item.attr_comb == optionId,
    );
    setItemDetail(itemData[0]);
  };

  useEffect(() => {
    if (productDetailData.has_options === 1) {
      filterOptionItem();
    }
  }, [optionId]);

  const onChangeOption = useCallback(val => {
    setOptionId(val);
  }, []);

  const currency = config.length === 0 ? ' ' : config.data.currency;
  const noImage = config.length === 0 ? [] : config.data.noimg;
  const rating = route.params ? route.params.rating : null;

  const goBack = () => navigation.goBack();
  const goToCart = () => navigation.navigate('CartPage');

  const onPressitem = (id, rating) => {
    dispatch(getProductDetail([]));
    dispatch(getRelatedProducts([]));
    navigation.navigate('ProductDetail', {rating});
    fetchProductDetials(id).then(res => res && dispatch(getProductDetail(res)));
    fetchRelatedProducts(id).then(
      res => res && dispatch(getRelatedProducts(res)),
    );
  };

  const addtoCartItem = item => dispatch(addtoCart(item));

  const onClickButton = () => {
    if (isCartItem) {
      goToCart();
    } else if (productDetailData.has_options === 1) {
      const price =
        itemDetail === undefined || itemDetail.length === 0
          ? productDetailData.option_prices[0].price
          : itemDetail.price;

      addtoCartItem({
        ...productDetailData,
        price: price,
        quantity: 1,
        sellingPriceTotal: price,
      });
      dispatch(isCartItemAcion(productDetailData.id));
    } else {
      addtoCartItem({
        ...productDetailData,
        quantity: 1,
        sellingPriceTotal:
          productDetailData.special_price || productDetailData.price,
      });
      dispatch(isCartItemAcion(productDetailData.id));
    }
  };

  return {
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
  };
};

export default useProductDetail;
