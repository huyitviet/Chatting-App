import React, {Component} from 'react';
import {Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import profileStyles from './ProfileStyle';
import CicleImage from '../../../common/components/circleImageComponent/CircleImage';

export class HomeScreen extends Component {
  // state = {
  //   text: '',
  // };
  // componentDidMount() {
  //   console.log(this.state.text);
  // }
  render() {
    return (
      <View style={profileStyles.container}>
        <View style={profileStyles.topBar}>
          <Text style={profileStyles.titleProfile}> Profile </Text>
        </View>

        <View style={profileStyles.body}>
          <View style={profileStyles.bodyTop}>
            <CicleImage />

            <TextInput style={profileStyles.titleName}>Purnima Khan</TextInput>
            <Text style={profileStyles.titleAddressSchool}>
              Guidhali School of Music and Drama
            </Text>
            <Text style={profileStyles.address}> London, UK </Text>
          </View>

          <View style={profileStyles.bodyMiddle}>
            <View style={profileStyles.stateFollow}>
              <Text style={profileStyles.titleAddressSchool}>Events</Text>
              <Text style={profileStyles.titleName}>456</Text>
            </View>
            <View style={profileStyles.stateFollow}>
              <Text style={profileStyles.titleAddressSchool}>Folowers</Text>
              <Text style={profileStyles.titleName}>602</Text>
            </View>
            <View style={profileStyles.stateFollow}>
              <Text style={profileStyles.titleAddressSchool}>Following</Text>
              <Text style={profileStyles.titleName}>290</Text>
            </View>
          </View>

          <View style={profileStyles.editButton}>
            <View style={profileStyles.editButton1}>
              <TouchableOpacity style={profileStyles.touchable2}>
                <Text style={profileStyles.circleImageProfile}>
                  &nbsp; Edit Profile &nbsp;
                </Text>
                <Image
                  style={profileStyles.touchableImage}
                  source={require('../../../assets/edit.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={profileStyles.editButton2}>
              <View style={profileStyles.touchable4}>
                <TouchableOpacity style={profileStyles.touchable3}>
                  <Text
                    style={profileStyles.titleStypeImage}
                    onPress={() => {}}>
                    Hosting
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={profileStyles.touchable3}>
                  <Text style={profileStyles.titleStypeImage}> Attending</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={profileStyles.bottom}></View>
      </View>
    );
  }
}

export default HomeScreen;
