import {AppRegistry} from 'react-native';
import App from './src/navigation/App';
import Profile from './src/features/screens/profileScreen/ProfileScreen';
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => Profile);