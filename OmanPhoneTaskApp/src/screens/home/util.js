import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchConfiguration,
  fetchHomeProducts,
  fetchProductDetials,
  fetchRelatedProducts,
} from '../../api';
import {
  getAppConfig,
  getHomeProducts,
  getProductDetail,
  getRelatedProducts,
  isCartItem,
} from '../../store/actions/index';

const useHome = () => {
  const navigation = useNavigation();
  const config = useSelector(state => state.appSetting.config);
  const products = useSelector(state => state.products.homeProducts);

  const dispatch = useDispatch();

  const getBannerData = () =>
    fetchConfiguration().then(res => res && dispatch(getAppConfig(res)));

  const getProductData = () =>
    fetchHomeProducts().then(res => res && dispatch(getHomeProducts(res)));

  useEffect(() => {
    getBannerData();
    getProductData();
  }, []);

  const onPressitem = (id, rating) => {
    dispatch(getProductDetail([]));
    dispatch(getRelatedProducts([]));
    dispatch(isCartItem(id));
    navigation.navigate('ProductDetail', {rating});
    fetchProductDetials(id).then(res => res && dispatch(getProductDetail(res)));
    fetchRelatedProducts(id).then(
      res => res && dispatch(getRelatedProducts(res)),
    );
  };

  return {config, products, onPressitem};
};

export default useHome;
