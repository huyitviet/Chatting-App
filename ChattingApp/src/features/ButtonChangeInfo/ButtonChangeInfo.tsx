import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import ButtonChangeInfoStyles from './ButtonChangeInfoStyles';

class ButtonChangeInfo extends React.Component {
  render() {
    return (
      <View style={ButtonChangeInfoStyles.editButton2}>
        <View style={ButtonChangeInfoStyles.touchable4}>
          <TouchableOpacity style={ButtonChangeInfoStyles.touchable3}>
            <Text
              style={ButtonChangeInfoStyles.titleStypeImage}
              onPress={() => {}}>
              Hosting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ButtonChangeInfoStyles.touchable3}>
            <Text style={ButtonChangeInfoStyles.titleStypeImage}>
              Attending
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ButtonChangeInfo;
