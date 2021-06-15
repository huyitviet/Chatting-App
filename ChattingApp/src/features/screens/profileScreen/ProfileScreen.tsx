import React, {Component} from 'react';
import {View} from 'react-native';
import profileStyles from './ProfileStyle';
import TitleName from '../../profileTitle/TitleName';
import PersonalInfo from '../../personalInfo/PersonalInfo';
import FollowInfo from '../../followInfo/FollowInfo';
import EditInfo from '../../editProfile/EditProfile';
import PicturesHistory from '../../picturesHistory/PicturesHistory';
export class HomeScreen extends Component {
  render() {
    return (
      <View style={profileStyles.container}>
       <TitleName />
        <View style={profileStyles.body}>
          <PersonalInfo />
          <FollowInfo /> 
          <View style={profileStyles.editButton}>
            <EditInfo />
            <PicturesHistory />
          </View>
        </View>
        <View style={profileStyles.bottom}></View>
      </View>
    );
  }
}

export default HomeScreen;
