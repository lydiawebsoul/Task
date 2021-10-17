import React,{useState} from 'react';
import {View, Image, TextInput,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Searchbar} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Images} from '../../assets';

import {AppStyle, colors} from '../../theme';
import Styles from './style';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={Styles.headerContainer}>
      <View style={[AppStyle.centerAlignedRow, Styles.headerRow]}>
      <TouchableOpacity>
        <MaterialIcons name="menu" size={25} color={colors.white} />
        </TouchableOpacity>
        <Image style={Styles.logoStyle} source={Images.appLogo} resizeMode='contain'/>
        <TouchableOpacity>
        <MaterialCommunityIcons name="bell" size={25} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={Styles.searchView}> 
      <Searchbar style={Styles.search}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
          />
       </View>
      
    </View>
  );
};

export default Header;
