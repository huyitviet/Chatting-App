import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../features/screens/homeScreen/HomeScreen';
import ProfileScreen from '../features/screens/profileScreen/ProfileScreen';
import {enableScreens} from 'react-native-screens';
import 'react-native-gesture-handler';


enableScreens();

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
