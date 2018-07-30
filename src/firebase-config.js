// Firebase config file
// Contains all the configs necessary to connect app with Firebase.
// import Firebase
import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDgSkJwhs_SmtTM1MdZQ-SEAOrAPNMkgcw',
  authDomain: 'running-with-swag.firebaseapp.com',
  databaseURL: 'https://running-with-swag.firebaseio.com',
  projectId: 'running-with-swag',
  storageBucket: 'running-with-swag.appspot.com',
  messagingSenderId: '614116817916',
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
