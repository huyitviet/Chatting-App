import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import CicleImage from '../../../common/components/circleImageComponent/CircleImage';
export default class HomeScreen extends Component {
  // đợi tý lm

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          backgroundColor: '#E5E5E5',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Button
          title="go to Profile"
             onPress={() => navigation.navigate('ProfileScreen')}
        />
        <Text> textInComponent </Text>
        <CicleImage />
      </View>
    );
  }
}
