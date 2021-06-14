import React from 'react';
import {View, Image} from 'react-native';
import stylesImage from './CircleImageStyle';

const CicleImage = () => {
  return (
    <View>
      <Image
        style={stylesImage.circle}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/vi/b/b0/Avatar-Teaser-Poster.jpg',
        }}
      />
    </View>
  );
};
export default CicleImage;
