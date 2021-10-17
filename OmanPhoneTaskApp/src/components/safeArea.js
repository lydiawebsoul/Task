import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {colors} from '../theme';

const SafeArea = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        animated={true}
        backgroundColor={colors.red}
        hidden={false}
        barStyle="light-content"
        translucent={false}
      />
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;
