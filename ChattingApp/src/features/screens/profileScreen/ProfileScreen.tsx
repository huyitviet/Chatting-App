import React, {Component} from 'react';
import {View} from 'react-native';
import profileStyles from './ProfileStyle';
import TitleName from '../../profileTitle/TitleName';
import PersonalInfo from '../../personalInfo/PersonalInfo';
import FollowInfo from '../../followInfo/FollowInfo';
import EditInfo from '../../editProfile/EditProfile';
import ButtonChangeInfo from '../../ButtonChangeInfo/ButtonChangeInfo';
import PicturesAlbum from '../../pictureAlbum/PicturesAlbum';
import ProfileController from './ProfileController';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }
  componentDidMount() {
    const profilecontroller = new ProfileController();
    profilecontroller.getProfileFromAPI(1).then(feed => {
      this.setState({
        profile: feed,
      });
    });
  }
  render() {
    const {profile} = this.state;
    return (
      <View style={profileStyles.container}>
        <TitleName />
        <View style={profileStyles.body}>
          <PersonalInfo item={profile} />
          <FollowInfo item={profile} />
          <View style={profileStyles.editButton}>
            <EditInfo />
            <ButtonChangeInfo />
          </View>
        </View>
        <PicturesAlbum />
      </View>
    );
  }
}

export default ProfileScreen;
