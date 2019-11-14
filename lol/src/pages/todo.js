import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class App extends Component   {
  camera(){
    Actions.camera()
  }
  accelerometer(){
    Actions.accelerometer()
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <Text>Welcome</Text>
        <TouchableOpacity onPress={this.camera}><Text style={styles.signupButton}>Camera</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.accelerometer}><Text style={styles.signupButton}>Accelerometer</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  signupButton: {
    color: '#12799f',
    fontSize:16,
    fontWeight: '500'
}
});