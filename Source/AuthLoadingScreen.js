import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';

function AuthLoadingScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Auth')
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AuthLoading Screen</Text>

    </View>
  );

}
export default AuthLoadingScreen;