import React,{useState} from 'react';
import {View, useWindowDimensions, Text,TouchableOpacity} from 'react-native';
import RenderHtml from 'react-native-render-html';
import Styles from './style';

const AboutCard = ({data}) => {
    const [shouldShow, setShouldShow] = useState(true);
  const {width} = useWindowDimensions();
  const source = {
    html: data ? data : '',
  };
  return (
    <View style={Styles.cardContainer}>
      <Text style={Styles.productCardtitle}>About Product</Text>

      <TouchableOpacity style={{right:'15%'}}
      onPress={() => setShouldShow(!shouldShow)}>
      <Text style={Styles.txt1}>View Details ...</Text>
      </TouchableOpacity>
      <View>
       {shouldShow ? (
      <RenderHtml contentWidth={width} source={source} />
      ) : null}
      </View>
    </View>
  );
};

export default AboutCard;
