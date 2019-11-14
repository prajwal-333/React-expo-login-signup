// import React, { Component } from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     Button
// } from 'react-native';

// onLogin() {
//     const { username, password } = this.state;

//     Alert.alert('Credentials', `${username} + ${password}`);
//   }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// class Login extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//         };
//     }

//     render() {
//         return (

//             <View style={styles.container}>
//                 <TextInput
//                     value={this.state.username}
//                     onChangeText={(username) => this.setState({ username })}
//                     placeholder={'Username'}
//                     style={styles.input}
//                     />
//                  <TextInput
//                     value={this.state.password}
//                     onChangeText={(password) => this.setState({ password })}
//                     placeholder={'Password'}
//                     secureTextEntry={true}
//                     style={styles.input}
//                     />
                    
//                  <Button
//                     title={'Login'}
//                     style={styles.input}
//                     //onPress={this.onLogin.bind(this)}
//                     />
//             </View>
//         );
//     }
// }
import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import Signup from './Signup';
import {Actions} from 'react-native-router-flux';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  
  onLogin() {
    const { username, password } = this.state;
    const user = {
        email: `${username}`,
        password:`${password}`
    }
    //console.log(JSON.stringify(user));
    fetch('http://172.27.30.182:8000/api/login',{
    method: 'POST',
    // api/register
     headers: new Headers({
         'Content-Type': 'application/json' // <-- Specifying the Content-Type
    }),
    body: JSON.stringify(user),
  })
  .then((response) => response.json())
  .then((responseJson) => {
   if(responseJson.message=='You are signed in'){
       Actions.todo();
   }else {
       Alert.alert(responseJson.message);
   }
  })
  
}
// {
//     console.log(resposeJson);
//     if (response.status == 200 ){
//         Actions.todo();
//     }
    // const { username, password } = this.state;
    // Alert.alert('Credentials', `${username} + ${password}`);

  signup() {
    Actions.signup()
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'emailID'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
                <View style={styles.signupTextCont}> 
                    <Text >Already have an account? </Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}>Sign up</Text></TouchableOpacity>
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 350,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  signupTextCont: {
    flexGrow: 0,
    justifyContent: 'center',
    //alignItems: 'flex-end',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: '#12799f', 
    fontSize:16
  },
  signupButton: {
      color: '#12799f',
      fontSize:16,
      fontWeight: '500'
  }
});

module.exports = Login;
