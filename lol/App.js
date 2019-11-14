/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     View,
// } from 'react-native';

// import Login from './src/pages/Login';
// import Routes from './src/Routes';

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
// });

// export default class  App extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Routes/>
//             </View>
//         );
//     }
// }

//AppRegistry.registerComponent('ContactRN', () => ContactRN);

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar
} from 'react-native';

import Routes from './src/Routes';

export default class App extends Component   {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#002f6c" 
          barStyle="light-content"
        />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
// import React, { Component } from 'react';
// import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
// import axios from 'axios';
// export default class App extends Component {
// handlePress = async () => {
//   const newUser = {
//     username: 'praj2',
//     firstname:'tahaw',
// 	  lastname:'hg',
//     password: 'prajwal',
//     password_con: 'prajwal',
//     email: 'praj4@g.com'
//   };
//   //console.log(JSON.stringify(newUser));
//   fetch('http://172.24.17.3:8000/api/register',{
//     method: 'POST',
//     // api/register
//      headers: new Headers({
//          'Content-Type': 'application/json' // <-- Specifying the Content-Type
//     }),
//     body: JSON.stringify(newUser),
//   })
//   .then((response) => {
//     //console.log(response);
//     if (response.status == 400 ){
//       response.json().then((responseJson)=>{
//         console.log(responseJson+"hiasdk");
//       })
//     }
//     else{
//       this.setState({
//         username: '',
//     firstname:'',
// 	  lastname:'',
//     password: '',
//     password_con: '',
//     email: ''
//       })
//       // this.props.navigation.navigate('Login');
//     }
//   })
//   .catch((error) =>{
//     console.error('Hi therkldalk'+error);
//   });
  // axios
  //     .post('http://172.24.17.3:8000/api/register', { body: newUser })
  //     .then(res => {
  //       //this.fetchNotes();
  //       this.setState({ modalOpen: false });
  //     })
  //     .catch(err => console.log(err));
// }
//   render(){
//   return(
//    <View style={{paddingTop: 50, paddingLeft: 50 }}>
//    <Text> Some other text </Text>
//     <Text> Some other text </Text>
//     <TouchableOpacity onPress={this.handlePress.bind(this)}>
//      <Text style={{paddingTop: 50, paddingLeft: 50, color: '#FF0000'}}> Click me to see the name </Text>
//     </TouchableOpacity></View> 
//   );
// }
// }
// import React, { Component } from 'react';
// import { TouchableOpacity, View, ActivityIndicator, Text, Alert} from 'react-native';
// export default class App extends Component {
// handleSubmit = async ()=> {
//   //e.preventDefault();
//   let databody = {
//     "username": "praj2",
//     "firstname":"tahaw",
// 	  "lastname":"hg",
//     "email": "praj@g.com",
//     "password": "praj",
//     "password_con": "hi"
//   }

//   return fetch('http://172.24.16.229:8000/api/register', {
//       method: 'POST',
//       body: JSON.stringify(databody),
//       headers: {
//           'Content-Type': 'application/json'
//       },
//   })
//   .then(res => res.json())
//   .then(data => console.log(data)); 
// }


// render(){
//   return (
//       <div>
//           <form onSubmit={this.handleSubmit}>
//               <label>
//                   Name
//                   <input type="text" name="name" value={this.nameIn} onChange={this.handleNameChange}/>
//               </label>
//               <label>
//                   quote
//                   <input type="text" name="quote" value={this.quoteIn} onChange={this.handleQuoteChange}/>
//               </label>
//               <input type="submit" value="Add to DB" />
//           </form> 
//       </div>
//   );
// }
// }