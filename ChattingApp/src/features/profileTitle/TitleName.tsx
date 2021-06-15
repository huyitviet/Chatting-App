import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Back from '../../common/components/backComponent/Back';
import Menu from '../../common/components/menuComponent/Menu';
import titleNameStyle from './TitleNameStyle';

class TitleName extends React.Component {
  render() {
    return (
      <View style={titleNameStyle.topBar}>
        <Back />
        <Text style={titleNameStyle.titleProfile}> 
        Profile </Text>
        <Menu />
      </View>
    );
  }
}

export default TitleName;
