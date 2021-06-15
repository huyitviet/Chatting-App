import {StyleSheet} from 'react-native';
import Color from '../../../constants/mainColor';
const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: Color.mainColor,
    flex: 1,
  },
  topBar: {
    backgroundColor: Color.mainColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  body: {
    flex: 1,
    backgroundColor: Color.mainColor,
    alignItems: 'center',
    paddingTop: 10,
    flexDirection: 'column',
  },
  bodyTop: {
    backgroundColor: Color.mainColor,
    alignItems: 'center',
  },
  bodyMiddle: {
    backgroundColor: Color.mainColor,
    flex: 1,
    flexDirection: 'row',
  },
  bottom: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Color.mainColor,
  },
  circleImageProfile: {
    justifyContent: 'center',
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
  titleProfile: {
    padding: 15,
    fontSize: 28,
    color: '#3570EC',
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
  touchable2: {
    height: 35,
    width: 130,
    backgroundColor: '#DA5AFA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
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
  touchableImage: {
    height: 20,
    width: 20,
    backgroundColor: '#DA5AFA',
  },
  stateFollow: {
    flex: 1,
    backgroundColor: Color.mainColor,
    alignItems: 'center',
  },
  editButton: {
    flex: 2,
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
