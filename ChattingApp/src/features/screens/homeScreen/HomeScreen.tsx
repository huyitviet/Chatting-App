import React, {Component} from 'react';
import {Text, View} from 'react-native';
import CicleImage from '../../../common/components/circleImageComponent/CircleImage';
export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#E5E5E5',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text> textInComponent </Text>
        <CicleImage />
      </View>
    );
  }
}
