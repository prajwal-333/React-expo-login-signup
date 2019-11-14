import React, { Component } from 'react';
import {Router, Stack,Scene} from 'react-native-router-flux';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Login from './pages/Login';
import Signup from './pages/Signup';
import todo from './pages/todo';
//import Camera from './pages/camera';
import camera from './pages/camera';
import accelerometer from './pages/accelerometer';
export default class Routes extends Component {
    render() {
        return (
            <Router barButtonIconStyle ={styles.barButtonIconStyle}
                hideNavBar={false} 
                navigationBarStyle={{backgroundColor: '#1565c0',}} 
                titleStyle={{color: 'white',}}
            >
                <Stack key="root">
                <Scene key="login" component={Login} title="Login"/>
                <Scene key="signup" component={Signup} title="Sign up"/>
                <Scene key="todo" component={todo} title="todo"/>
                <Scene key="camera" component={camera} title="Camera"/>
                <Scene key="accelerometer" component={accelerometer} title="Accelerometer"/>
                </Stack>
            </Router>
        )
    }
}

const styles =StyleSheet.create( {
    barButtonIconStyle: {
        tintColor: 'white'
    }
});

module.exports = Routes;