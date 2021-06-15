import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const personalInfoStyles = StyleSheet.create({
  titleStypeImage: {
    color: 'black',
    fontSize: 14,
  },
  editButton2: {
    // flex: 1,
    backgroundColor: Color.mainColor,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable3: {
    height: 28,
    width: 100,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable4: {
    height: 36,
    width: 203,
    backgroundColor: '#878EDE',
    flexDirection: 'row',
    borderRadius: 20,
    alignItems: 'center',
    paddingLeft: 2,
  },
});
export default personalInfoStyles;