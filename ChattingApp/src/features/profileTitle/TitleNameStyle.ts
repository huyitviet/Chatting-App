import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const titleNameStyle = StyleSheet.create({
  topBar: {
    backgroundColor: Color.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  titleProfile: {
    padding: 15,
    fontSize: 28,
    color: '#3570EC',
  },
});
export default titleNameStyle;