import React, { Component } from 'react';
import DisplayData from './Components/DisplayData.js';
import './App.css';
import TeamMembers from './Components/TeamMembers.js';
import firebase from 'firebase'

class App extends Component {
  constructor(props){
      super(props);
      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyBwuae0TMpFirv2gOJtkq8-Wxg7M6Eqvqo",
          authDomain: "cse110firebase-16d1e.firebaseapp.com",
          databaseURL: "https://cse110firebase-16d1e.firebaseio.com",
          projectId: "cse110firebase-16d1e",
          storageBucket: "cse110firebase-16d1e.appspot.com",
          messagingSenderId: "701211249507"
      };
      firebase.initializeApp(config);
  }
  render() {
    return <div>
            <TeamMembers db={firebase}/>
            <DisplayData db={firebase}/>
            </div>

  }
}



export default App;
