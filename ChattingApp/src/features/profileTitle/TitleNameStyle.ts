import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const titleNameStyle = StyleSheet.create({
  topBar: {
    backgroundColor: Color.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
  },
  titleProfile: {
    flex: 1,
    padding: 20,
    fontSize: 28,
    color: '#3570EC',
    paddingLeft: 125
  },
});
export default titleNameStyle;
