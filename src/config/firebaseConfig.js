// Firebase CORE
import * as firebase from 'firebase/app';
// Firebase Addons
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCKIj9_8H42PBDNN6X5FkbFfIJmZtkoJ2M',
  authDomain: 'ahmettopic-4ff91.firebaseapp.com',
  databaseURL: 'https://ahmettopic-4ff91.firebaseio.com',
  projectId: 'ahmettopic-4ff91',
  storageBucket: 'ahmettopic-4ff91.appspot.com',
  messagingSenderId: '70741581317',
  appId: '1:70741581317:web:9507d3f138846305',
};

// Initialize Firebase
const firebaseConfig = firebase.initializeApp(config);
// EXPORT
export default firebaseConfig;
