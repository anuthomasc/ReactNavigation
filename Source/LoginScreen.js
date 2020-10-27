
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({ navigation }) {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('App')}
      />
    </View>
  );

}
export default LoginScreen;