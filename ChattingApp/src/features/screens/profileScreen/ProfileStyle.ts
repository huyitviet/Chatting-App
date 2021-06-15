import {StyleSheet} from 'react-native';
import Color from '../../../constants/mainColor';
const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.mainColor,
    flex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: Color.mainColor,
    alignItems: 'center',
    flexDirection: 'column',
  },
  input: {
    height: 30,
  },
  touchable: {
    height: 40,
    width: 200,
    backgroundColor: '#58db53',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
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

  editButton: {
    flex: 3,
    backgroundColor: Color.mainColor,
  },
  editButton1: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: Color.mainColor,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  editButton2: {
    // flex: 1,
    backgroundColor: Color.mainColor,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStypeImage: {
    color: 'black',
    fontSize: 14,
  },
});
export default profileStyles;
