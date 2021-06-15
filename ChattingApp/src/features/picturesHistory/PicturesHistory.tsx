import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import picturesHistoryStyles from './picturesHistoryStyles';

class PicturesHistory extends React.Component {
  render() {
    return (
      <View style={picturesHistoryStyles.editButton2}>
        <View style={picturesHistoryStyles.touchable4}>
          <TouchableOpacity style={picturesHistoryStyles.touchable3}>
            <Text
              style={picturesHistoryStyles.titleStypeImage}
              onPress={() => {}}>
              Hosting
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={picturesHistoryStyles.touchable3}>
            <Text style={picturesHistoryStyles.titleStypeImage}>Attending</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PicturesHistory;
