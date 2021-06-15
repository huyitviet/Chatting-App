import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

import CircleTouchableOpacity from '../../../common/components/circleTouchablOpacity/CircleTouchableOpacity';
import FriendOnline from '../../../common/components/listFriend/ListFriend';
import ListFriendPost from '../../componentHome/listFriendPost/ListFriendPost';
export default class HomeScreen extends Component {

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          backgroundColor: '#E5E5E5',
          flex: 1,
        }}>
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View style={{ flex: 9, justifyContent: 'center', paddingLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Hello,</Text>
            <Text style={{ fontSize: 30 }}>Anastasia</Text>
          </View>
          <View style={{ flex: 2, justifyContent: 'center' }}>
            <CircleTouchableOpacity />
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ paddingLeft: 20 }}>Your Fratured Stories</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 2 }}>

            </View>
            <View style={{ flex: 10 }}>
              <FriendOnline />
            </View>
          </View>
        </View>
        <View style={{ flex: 15 }}>
          <ListFriendPost />
        </View>
      </View>
    );
  }
}
