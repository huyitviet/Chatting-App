import React from 'react';
import { View, Image } from 'react-native';
import stylesImage from './CircleImageStyle';

const CicleImage = props => {
  const {url} = props;
  return (
    <View>
      <Image
        style={stylesImage.circle}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};
export default CicleImage;
