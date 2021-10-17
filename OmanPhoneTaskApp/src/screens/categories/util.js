import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchConfiguration} from '../../api';
import {getAppConfig} from '../../store/actions/index';

const useHome = () => {
  const navigation = useNavigation();
  const config = useSelector(state => state.appSetting.config);

  const dispatch = useDispatch();

  const getBannerData = () =>
    fetchConfiguration()
    .then(res => res && dispatch(getAppConfig(res))


  );

  useEffect(() => {
    getBannerData();
  }, []);


  return {config};
};

export default useHome;
