import {StyleSheet} from 'react-native';
import {colors} from '../../../../theme';

const Styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.red,
  },
  backIconStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerTitleContainer: {
    width: '100%',
    position: 'absolute',
    left: 0,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: 5,
    elevation: 5,
  },
  productNameStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    marginRight: 15,
  },
  imageStyle: {
    width: 90,
    height:90,
    resizeMode: 'contain',
  },
  leftCard: {
    flex: 0.8,
  },
  rightCard: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  countBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: -10,
  },
  countBtnStyle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGrey,
    marginHorizontal: 10,
  },
  countBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },
  deleteBtnStyle: {
    alignSelf: 'center',
    marginRight: 15,
  },
  priceContainer: {
    position: 'absolute',
    bottom: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.red,
  },
  countTextStyle: {
    fontSize: 14,
    color: colors.black,
  },
  cartFooterContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  totalAmtContainer: {},
  totalText: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: 'rgba(0,0,0,0.75)',
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.75)',
  },
  checkoutBtnContainer: {
    paddingHorizontal: '12%',
    justifyContent: 'center',
    backgroundColor: colors.red,
  },
  checkoutBtnText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default Styles;
