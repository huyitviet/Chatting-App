import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import menuStyles from './MenuStyle';

class Menu extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={menuStyles.touch}
            source={{uri: 'https://image.flaticon.com/icons/png/512/483/483345.png'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Menu;
