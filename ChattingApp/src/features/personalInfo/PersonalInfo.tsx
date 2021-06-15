import React from 'react';
import {Text, View} from 'react-native';
import personalInfoStyles from './PersonalInfoStyle';
import CicleImage from '../../common/components/circleImageComponent/CircleImage';
class PersonalInfo extends React.Component {
  render() {
    const {item} = this.props;
    return (
      <View>
        <View style={personalInfoStyles.bodyTop}>
          <CicleImage url={item.avatar} />
          <Text style={personalInfoStyles.titleName}>{item.name}</Text>
          <Text style={personalInfoStyles.titleAddressSchool}>
          {item.quote}
          </Text>
          <Text style={personalInfoStyles.address}> London, UK </Text>
        </View>
      </View>
    );
  }
}

export default PersonalInfo;
