
import * as React from 'react';
import { View, Text, Button } from 'react-native';

function ListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>List Screen</Text>
      <Button
        title="Go to Details"
      // onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}


export default ListScreen;