// Firebase config file
// Contains all the configs necessary to connect app with Firebase.
// import Firebase
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const config = {
  apiKey: 'AIzaSyDgSkJwhs_SmtTM1MdZQ-SEAOrAPNMkgcw',
  authDomain: 'running-with-swag.firebaseapp.com',
  databaseURL: 'https://running-with-swag.firebaseio.com',
  projectId: 'running-with-swag',
  storageBucket: 'running-with-swag.appspot.com',
  messagingSenderId: '614116817916',
};

firebase.initializeApp(config);
// This exports the auth module of Firebase,
// as well as the Google Auth Provider so that we'll be able to use
// Google Authentication for sign in anywhere inside of our application
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
