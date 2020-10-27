
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createSwitchNavigator } from 'react-navigation-stack';
import HomeScreen from './Source/HomeScreen'
import DetailScreen from './Source/DetailScreen'
import ListScreen from './Source/ListScreen'
import LoginScreen from './Source/LoginScreen'
import SignupScreen from './Source/SignupScreen'
import AuthLoadingScreen from './Source/AuthLoadingScreen'
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Switch = createSwitchNavigator();
function AuthStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={({ route, navigation }) => ({
        gestureEnabled: true,
      })}
    >
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'LoginScreen' }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'SignupScreen' }} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator drawerPosition='right'>
      <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Drawer.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail' }} />
      <Drawer.Screen name="List" component={ListScreen} options={{ title: 'List' }} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="App" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;