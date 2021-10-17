import {StyleSheet} from 'react-native';
import {colors} from '../../theme';

const Styles = StyleSheet.create({
  SwiperContainer: {
    width: '100%',
    height: undefined,
    aspectRatio: 5 / 3,
    backgroundColor: colors.white,
  },
  swiperImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 5 / 3,
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 12,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    marginBottom: -15,
    borderRadius: 10,
  },
});

export default Styles;
