import {StyleSheet,Dimensions} from 'react-native';
import {colors} from '../../theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.red,
    height:windowHeight/6
  },
  searchView:{
    backgroundColor:'transparent',
    height:windowHeight/14,
    width:windowWidth,
    top:'10%'
  },
  search:{
    width:windowWidth/1.10,
    alignSelf:'center',
    height:windowHeight/18,top:'1%'
  },
  logoStyle: {
    width:windowWidth/1.35,
    height:windowHeight/14,
  },
  headerRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchContainer: {
    borderRadius: 10,
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 15,
  },
  searchInputStyle: {
    paddingVertical: 8,
    paddingLeft: 10,
  },
  productCardContainer: {
    backgroundColor: colors.white,
    marginVertical: 10,
    paddingVertical: 20,
  },
  cardRow: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  cardTitleStyle: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    color:'black'
  },
  viewAllBtnContainer: {
    backgroundColor: colors.red,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
  },
  viewAllBtnText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemCardContainer: {
    height: 200,
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  itemImageStyle: {
    width: 80,
    height: undefined,
    aspectRatio: 3 / 4,
    resizeMode: 'contain',
  },
  itemNameStyle: {
    marginHorizontal: 20,
  },
  priceTextStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.red,
  },
  mrpTextStyle: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.6)',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  storageTextContainer: {
    position: 'absolute',
    top: 70,
    right: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    paddingVertical: 3,
    elevation: 5,
  },
  storageTextStyle: {
    fontSize: 14,
    color: colors.red,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 75,
    left: 40,
    backgroundColor: colors.orange,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  ratingTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default Styles;
