import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import backStyles from './BackStyle';

class Back extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Image
            style={backStyles.touch}
            source={{uri: 'https://image.flaticon.com/icons/png/128/2223/2223615.png'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Back;
