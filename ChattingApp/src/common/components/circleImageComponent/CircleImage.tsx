import React from 'react';
import { View, Image } from 'react-native';
import stylesImage from './CircleImageStyle';

const CicleImage = () => {
  return (
    <View>
      <Image
        style={stylesImage.circle}
        source={{
          uri: 'https://thumbs.dreamstime.com/z/bearded-man-s-face-hipster-character-fashion-silhouette-avata-bearded-man-s-face-hipster-character-fashion-silhouette-avatar-105106856.jpg',
        }}
      />
    </View>
  );
};
export default CicleImage;
