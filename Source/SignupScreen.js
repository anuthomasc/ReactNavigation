
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function SignupScreen({ navigation }) {
  console.log(navigation)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Signup Screen</Text>
    </View>
  );

}
export default SignupScreen;