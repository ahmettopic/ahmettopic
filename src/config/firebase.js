import firebase from 'firebase';

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCKIj9_8H42PBDNN6X5FkbFfIJmZtkoJ2M',
  authDomain: 'ahmettopic-4ff91.firebaseapp.com',
  databaseURL: 'https://ahmettopic-4ff91.firebaseio.com',
  projectId: 'ahmettopic-4ff91',
  storageBucket: 'ahmettopic-4ff91.appspot.com',
  messagingSenderId: '70741581317',
  appId: '1:70741581317:web:9507d3f138846305',
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// EXPORT
export default fire;
