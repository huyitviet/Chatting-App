import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default HomeScreen
