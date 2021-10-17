import {StyleSheet,Dimensions} from 'react-native';
import {colors} from '../../theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  itemCardContainer: {
    width:windowWidth/2.1,
    height:windowHeight/3,
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
    width:windowWidth/2.5,
    height:windowHeight/4.5,
    aspectRatio: 3 / 4,
    resizeMode: 'contain',
  },
  itemNameStyle: {
    fontSize:12,
    fontWeight:'600'
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
    top: '52%',
    right: '10%',
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
    top: '52%',
    left: '10%',
    backgroundColor: colors.orange,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  ratingTextStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default Styles;
