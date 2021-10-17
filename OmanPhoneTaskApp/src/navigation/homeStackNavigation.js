import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductDetails from '../screens/home/productDetail.js';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductDetail" component={ProductDetails} />
    </Stack.Navigator>
  );
}

export default HomeStack;
