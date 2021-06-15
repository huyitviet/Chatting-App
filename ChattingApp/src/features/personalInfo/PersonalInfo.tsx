import React from 'react';
import {Text, View} from 'react-native';
import personalInfoStyles from './PersonalInfoStyle';
import CicleImage from '../../common/components/circleImageComponent/CircleImage';
class PersonalInfo extends React.Component {
  render() {
    return (
      <View>
        <View style={personalInfoStyles.bodyTop}>
          <CicleImage />

          <Text style={personalInfoStyles.titleName}>
            Purnima Khan
          </Text>
          <Text style={personalInfoStyles.titleAddressSchool}>
            Guidhali School of Music and Drama
          </Text>
          <Text style={personalInfoStyles.address}> London, UK </Text>
        </View>
      </View>
    );
  }
}

export default PersonalInfo;
