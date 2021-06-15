import React, {Component} from 'react';
import {Text, View} from 'react-native';
import titleNameStyle from './TitleNameStyle';

class TitleName extends React.Component {
  render() {
    return (
      <View style={titleNameStyle.topBar}>
      <Text style={titleNameStyle.titleProfile}> Profile </Text>
    </View>
    )
  }
}

export default TitleName;
