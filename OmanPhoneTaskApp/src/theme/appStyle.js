import {StyleSheet} from 'react-native';
import colors from './colors';

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundGrey,
  },
  centerAlignedRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppStyle;
