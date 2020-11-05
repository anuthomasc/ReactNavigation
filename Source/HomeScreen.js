
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import ZoomUs from 'react-native-zoom-us';
function HomeScreen({ navigation }) {
  console.log(navigation)
  ZoomUs.initialize({
    clientKey: 'h3o3FtMw1e2662TdDBznrnVOB9GwHPKj7IY8',
    clientSecret: 'flcnoBVY3bomGs65068E3MKKuPmLnFEV7X0Q',
    domain: 'zoom.us'
  }, {
    disableShowVideoPreviewWhenJoinMeeting: true
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <View style={{ height: 20 }}></View>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Detail')
        }}
      />
      <View style={{ height: 20 }}></View>
      <Button
        title="Join Zoom Call"
        onPress={() => {
          ZoomUs.joinMeeting({
            userName: 'Anu Thomas',
            meetingNumber: '93907873880',
          })

        }
        }
      />
    </View>
  );

}
export default HomeScreen;