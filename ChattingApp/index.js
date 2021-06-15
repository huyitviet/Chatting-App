/**
 * @format
 */
import { AppRegistry } from 'react-native';
import HomeScreen from './src/features/screens/homeScreen/HomeScreen';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => HomeScreen);


// sao conflic lắm thế, sửa hết đâu  k hieu, mấy file như này sửa hết đi.Do 2 người cùng động vào, nên nó bị, bh chọn cái nào l
// lấy cái nào ban dau la cua minh chay dc profile roi gio can lay home de lam na