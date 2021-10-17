import urls from './Urls';
import {getData} from './Utils';

const fetchConfiguration = () => {
  const res = getData(`${urls.configUrl}`);
  return Promise.resolve(res);
};

const fetchHomeProducts = () => {
  const res = getData(`${urls.homeUrl}`);
  return Promise.resolve(res);
};

const fetchProductDetials = id => {
  const params = {id: id};
  const res = getData(`${urls.productDetailUrl}`, params);
  return Promise.resolve(res);
};

const fetchRelatedProducts = id => {
  const params = {id: id};
  const res = getData(`${urls.relatedProductUrl}`, params);
  return Promise.resolve(res);
};

export {
  fetchConfiguration,
  fetchHomeProducts,
  fetchProductDetials,
  fetchRelatedProducts,
};
