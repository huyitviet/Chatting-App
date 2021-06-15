import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const editProfileStyles = StyleSheet.create({
  circleImageProfile: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton1: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: Color.mainColor,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
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
  touchableImage: {
    height: 20,
    width: 20,
    backgroundColor: '#DA5AFA',
  },
  


  
  
});
export default editProfileStyles;