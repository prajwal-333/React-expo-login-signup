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
//import Login from './Login';
import {Actions} from 'react-native-router-flux';
export default class Signup extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      firstname: '',
      lastname: '',
      password: '',
      password2:'',
      email:'',
    };
  }
  
  onSignUp() {
    // const { username, password } = this.state;
    // Alert.alert('Credentials', `${username} + ${password}`);
    const { username,firstname,lastname,password,password2, email } = this.state;
    const user = {
      username: `${username}`,
      firstname:`${firstname}`,
      lastname:`${lastname}`,
      password: `${password}`,
      password_con: `${password2}`,
      email: `${email}`,
    };
    fetch('http://172.27.30.182:8000/api/register',{
      method: 'POST',
      // api/register
       headers: new Headers({
           'Content-Type': 'application/json' // <-- Specifying the Content-Type
      }),
      body: JSON.stringify(user),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
     if(responseJson.message=='You are signed in'){
         Actions.todo();
     }else {
         Alert.alert('Invalid Credentials');
     }
    if(responseJson.username==`${username}`){
     // Actions.login();
    }else{
      Alert.alert(responseJson.msg);
    }
    })
  }
  goBack() {
    Actions.pop();
   }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.firstname}
          onChangeText={(firstname) => this.setState({ firstname })}
          placeholder={'firstname'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.lastname}
          onChangeText={(lastname) => this.setState({ lastname })}
          placeholder={'lastname'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.password2}
          onChangeText={(password2) => {
            return this.setState({ password2 });
          }}
          placeholder={'ReType-Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={'email'}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button
          title={'Signup'}
          style={styles.input}
          onPress={this.onSignUp.bind(this)}
        />
                { <View style={styles.signupTextCont}> 
                    <Text >Already have an account? </Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}>Login</Text></TouchableOpacity>
                </View> }
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

module.exports = Signup;
