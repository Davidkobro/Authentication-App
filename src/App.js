import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  //lifecycle automatically involked
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyDW_o3AEiFYmoIJbOD9lfzqwPV5fUyW0VQ',
      authDomain: 'authentication-b98f2.firebaseapp.com',
      databaseURL: 'https://authentication-b98f2.firebaseio.com',
      projectId: 'authentication-b98f2',
      storageBucket: 'authentication-b98f2.appspot.com',
      messagingSenderId: '914865879677',
      appId: '1:914865879677:web:ebbe3a33679faf2b'
    };
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()} >
          Log Out
          </Button>
        );
      case false:
          return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
