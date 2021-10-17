import {StyleSheet,Dimensions} from 'react-native';
import {colors} from '../../theme';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: colors.red,
  },
  searchView:{
    backgroundColor:'transparent',
    height:windowHeight/14,
    width:windowWidth
  },
  search:{
    width:windowWidth/1.10,
    alignSelf:'center',
    height:windowHeight/18,top:'1%'
  },
text:{
  top:'40%',
  justifyContent:'center',
  textAlign:'center'
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
});

export default Styles;
