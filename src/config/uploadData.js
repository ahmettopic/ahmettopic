const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');

// Initiate Firebase App
const databaseURL = 'https://ahmettopic-4ff91.firebaseio.com';
firestoreService.initializeApp(serviceAccount, databaseURL);

// Start exporting your data
firestoreService
  .restore('data.json')
  .then((data) => console.log(JSON.stringify(data)));
