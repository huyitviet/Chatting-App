import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import editProfileStyles from './editProfileStyles';
class EditProfile extends React.Component {
  render() {
    return (
      <View style={editProfileStyles.editButton1}>
        <TouchableOpacity style={editProfileStyles.touchable2}>
          <Text style={editProfileStyles.circleImageProfile}>
            &nbsp; Edit Profile &nbsp;
          </Text>
          <Image
            style={editProfileStyles.touchableImage}
            source={require('../../assets/edit.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default EditProfile;
