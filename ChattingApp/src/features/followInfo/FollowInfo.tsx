import React from 'react';
import {Text, View} from 'react-native';
import followInfoStyles from './followInfoStyles';
class FollowInfo extends React.Component {
  
  render() {
    const {item} = this.props;
    return (
      <View style={followInfoStyles.bodyMiddle}>
        <View style={followInfoStyles.stateFollow}>
          <Text style={followInfoStyles.follower}>Events</Text>
          <Text style={followInfoStyles.titleName}>{item.events}</Text>
        </View>
        <View style={followInfoStyles.stateFollow}>
          <Text style={followInfoStyles.follower}>Folowers</Text>
          <Text style={followInfoStyles.titleName}>{item.followes}</Text>
        </View>
        <View style={followInfoStyles.stateFollow}>
          <Text style={followInfoStyles.follower}>Following</Text>
          <Text style={followInfoStyles.titleName}>{item.following}</Text>
        </View>
      </View>
    );
  }
}

export default FollowInfo;
