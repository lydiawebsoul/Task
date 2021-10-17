import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import ProductDetails from '../screens/home/productDetail.js';
import TabNavigation from './tabNavigation';
import CartPage from '../screens/home/productDetail.js/cartPage/index';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ProductDetail" component={ProductDetails} />
        <Stack.Screen name="CartPage" component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
