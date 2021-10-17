import {StyleSheet,Dimensions} from 'react-native';
import {colors} from '../../theme';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
},
  headerContainer: {
    backgroundColor: colors.red,
    width:screenWidth,
    height:screenHeight/13
  },
  headerTxt:{
    top:'40%',
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },
text:{
  top:'40%',
  justifyContent:'center',
  textAlign:'center'
},

});

export default Styles;
