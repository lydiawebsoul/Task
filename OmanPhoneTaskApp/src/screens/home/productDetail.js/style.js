import {StyleSheet,Dimensions} from 'react-native';
import {colors} from '../../../theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  cardView:{
    margin:'1%',
    height:windowHeight/3,
    backgroundColor:'pink'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.red,
  },
  backIconStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  scrollContainer: {
    paddingBottom: 30,
  },
  swiperImageStyle: {
      height:windowHeight/4,
      width:windowWidth/1.10,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
  cardContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingBottom: 15,
    marginBottom: 15,
  },
  productNameStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  contentContainer: {
    top:'1%'
  },
  ratingContainer: {
    flexDirection: 'row',
    width: 55,
    alignItems: 'center',
    backgroundColor: colors.orange,
    paddingHorizontal: 6,
    borderRadius: 8,
    marginVertical: 5,
  },
  ratingTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
  priceTextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.red,
  },
  mrpTextStyle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  specCardContainer: {
    marginTop: 15,
    backgroundColor: colors.lightGrey,
  },
  colorRow: {
    backgroundColor: colors.darkGrey,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  features: {
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  colorImageStyle: {
    width: 25,
    height: 25,
    marginLeft: '20%',
  },
  txt:{
    fontSize: 14,
    left:'5%'
  },
  txt1:{
    fontSize: 14,
    fontWeight:'400',
    textAlign:'center',
     color:'firebrick',
     left:'15%'
  },
  specIconStyle: {
    width: 30,
    height: 25,
  },
  specCard: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  specBottomContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specText: {
    fontSize: 14,
    marginTop: 5,
  },
  productCardtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 15,
    marginHorizontal: 15,
  },
  itemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  a2cBtnContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: colors.red,
  },
  a2cBtnText: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: colors.white,
  },
  cartQtyContainer: {
    position: 'absolute',
    top: 2,
    right: 5,
    backgroundColor: '#30e61c',
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  optionLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionBtnStyle: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    marginVertical: 3,
  },
  optionBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default Styles;
