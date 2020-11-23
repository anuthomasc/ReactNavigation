
import React, { useState, useEffect } from "react";
import { View, Text, Button, Linking } from 'react-native';
import { authorize, prefetchConfiguration } from 'react-native-app-auth';
function LoginScreen({ navigation }) {
  useEffect(async () => {
    Linking.getInitialURL().then((url) => {
      // console.log(url)
    })
    Linking.addEventListener('url', this._handleOpenURL);
  }, []);
  _handleOpenURL = (event) => {
  }
  const config = {
    warmAndPrefetchChrome: true,
    issuer: 'http://localhost:8080/auth/realms/demo/',
    clientId: 'test',
    redirectUrl: 'keycloak://login',
    scopes: ['email', 'profile'],
  };

  const onPrefetch = () => {
    prefetchConfiguration(config);
    console.log('onPrefetch: Complete');
  };
  const onSignIn = () => {
    try {
      authorize(config).then((response) => {
        console.log('onSignIn: authorize: response: ', response);
      });
    } catch (error) {
      console.log('onSignIn: error: ');
      console.log(error);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('App')}
      />
      <Button title={'Prefetch'} onPress={() => onPrefetch()} />
      <Button title={'Login'} onPress={() => onSignIn()} />
    </View>
  );

}
export default LoginScreen;