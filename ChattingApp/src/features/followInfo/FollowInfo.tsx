import React from 'react';
import {Text, View} from 'react-native';
import followInfoStyles from './followInfoStyles';
class FollowInfo extends React.Component {
  render() {
    return (
      <View style={followInfoStyles.bodyMiddle}>
        <View style={followInfoStyles.stateFollow}>
          <Text style={followInfoStyles.follower}>Events</Text>
          <Text style={followInfoStyles.titleName}>456</Text>
        </View>
        <View style={followInfoStyles.stateFollow}>
          <Text style={followInfoStyles.follower}>Folowers</Text>
          <Text style={followInfoStyles.titleName}>602</Text>
        </View>
        <View style={followInfoStyles.stateFollow}>
          <Text style={followInfoStyles.follower}>Following</Text>
          <Text style={followInfoStyles.titleName}>290</Text>
        </View>
      </View>
    );
  }
}

export default FollowInfo;
