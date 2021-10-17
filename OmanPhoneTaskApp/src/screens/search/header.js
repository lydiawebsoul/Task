import React,{useState} from 'react';
import {View} from 'react-native';
import { Searchbar} from 'react-native-paper';
import Styles from './style';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={Styles.headerContainer}>
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
