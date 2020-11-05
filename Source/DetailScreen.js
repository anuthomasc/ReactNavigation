

import {
  View, Text, Button,
  StyleSheet,
  TouchableOpacity,
  Linking,
  TouchableHighlight
} from 'react-native';
import React, { useState, useEffect } from "react";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import { RNCamera } from 'react-native-camera';
function DetailsScreen({ navigation }) {
  const [stopwatchStart, setStopwatchStart] = useState(false);
  const [timerStart, setTimerStart] = useState(false);
  const [totalDuration, setTotalDuration] = useState(90000);
  const [timerReset, setTimerReset] = useState(false);
  const [stopwatchReset, setStopwatchReset] = useState(false);
  const [timeTaken, setTimeTaken] = useState(0);

  useEffect(() => {
    toggleStopwatch()
  }, []);

  function onSuccess(e) {
    console.log(e)
    console.log(timeTaken)
    if (e.data) {
      // Linking.openURL(e.data).catch(err =>
      //   console.error('An error occured', err)
      // );
    }

  };
  function getFormattedTime(time) {
    console.log(time)
    setTimeTaken(time);
  };
  function toggleTimer() {
    setTimerStart(!timerStart)
    setTimerReset(false)
    // this.setState({ timerStart: !timerStart, timerReset: false });
  }

  // function resetTimer() {
  //   setTimerStart(false)
  //   setTimerReset(true)
  //   // this.setState({ timerStart: false, timerReset: true });
  // }

  function toggleStopwatch() {
    setStopwatchStart(!stopwatchStart)
    setStopwatchReset(false)
    // this.setState({ stopwatchStart: !stopwatchStart, stopwatchReset: false });
  }

  // function resetStopwatch() {
  //   this.setState({stopwatchStart: false, stopwatchReset: true});
  // }

  return (
    <View style={{
      flex: 1, alignItems: 'center',
      justifyContent: 'center', backgroundColor: "#555555",
      borderWidth: 2, borderColor: "#FFF"
    }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Listing screen"
        onPress={() => navigation.navigate('List')}
      />
      <Stopwatch laps msecs start={stopwatchStart}
        // reset={this.state.stopwatchReset}
        options={options}
        getTime={getFormattedTime} />
      <QRCodeScanner
        onRead={onSuccess}
        cameraStyle={{
          width: 330
        }}
        containerStyle={{
          height: 200,
          borderColor: "#ddd000", borderWidth: 2,
          width: 330,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
      <TouchableHighlight onPress={toggleStopwatch}>
        <Text style={{ fontSize: 30 }}>{!stopwatchStart ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      {/* <TouchableHighlight onPress={this.resetStopwatch}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableHighlight> */}
      <Timer totalDuration={totalDuration} msecs start={timerStart}
        reset={timerReset}
        options={options}
        handleFinish={handleTimerComplete}
        getTime={getFormattedTime} />
      <TouchableHighlight onPress={toggleTimer}>
        <Text style={{ fontSize: 30 }}>{!timerStart ? "Start" : "Stop"}</Text>
      </TouchableHighlight>
      {/* <TouchableHighlight onPress={this.resetTimer}>
          <Text style={{fontSize: 30}}>Reset</Text>
        </TouchableHighlight> */}
    </View>
  );
}

const options = {
  container: {
    backgroundColor: '#000',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};
const handleTimerComplete = () => alert("custom completion function");
export default DetailsScreen;