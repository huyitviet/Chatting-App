import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const followInfoStyle = StyleSheet.create({
  
  titleName: {
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 18,
  },
  titleAddressSchool: {
    color: '#9CB1D8',
    fontSize: 16,
  },
  stateFollow: {
    flex: 1,
    backgroundColor: Color.mainColor,
    alignItems: 'center',
  },
  bodyMiddle: {
    backgroundColor: Color.mainColor,
    flex: 1,
    flexDirection: 'row',
  },
});
export default followInfoStyle;