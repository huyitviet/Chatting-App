import {StyleSheet} from 'react-native';
import Color from '../../constants/mainColor';
const titleNameStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    borderWidth: 5,
    borderColor: Color.mainColor,
    borderRadius:20,
  },
  imageMain: {
    width: '100%',
    height: 300,
    borderWidth: 5,
    borderColor: Color.mainColor,
    // borderRadius: 10,
  },
  container: {flex: 1},
  container2: {flex: 1, flexDirection: 'column'},
  bottom: {
    flex: 0.8,
    paddingTop: 20,
    backgroundColor: Color.mainColor,
    flexDirection: 'row',
  },
});

export default titleNameStyle;
