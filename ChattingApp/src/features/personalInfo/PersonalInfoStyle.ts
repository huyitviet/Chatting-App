import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const personalInfoStyles = StyleSheet.create({
  bodyTop: {
    backgroundColor: Color.mainColor,
    alignItems: 'center',
  },
  titleName: {
    fontWeight: 'bold',
    paddingTop: 5,
    fontSize: 18,
  },
  titleAddressSchool: {
    color: '#9CB1D8',
    fontSize: 16,
  },
  address: {
    color: '#9CB1D8',
    paddingBottom: 20,
  },
  
});
export default personalInfoStyles;