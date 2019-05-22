import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  //lifecycle automatically involked
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDW_o3AEiFYmoIJbOD9lfzqwPV5fUyW0VQ',
      authDomain: 'authentication-b98f2.firebaseapp.com',
      databaseURL: 'https://authentication-b98f2.firebaseio.com',
      storageBucket: 'authentication-b98f2.appspot.com',
      messagingSenderId: '914865879677'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
