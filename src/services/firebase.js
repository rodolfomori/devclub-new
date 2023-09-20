// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBPof-FJEt5cjct-Z1ZoOCCYc4KcFmNJWU',
  authDomain: 'devclub-app.firebaseapp.com',
  projectId: 'devclub-app',
  storageBucket: 'devclub-app.appspot.com',
  messagingSenderId: '101799969580',
  appId: '1:101799969580:web:f8f040b641901ff40c2289',
  measurementId: 'G-MQNFDL8TS7'
});

const db = getFirestore(firebaseApp);

export default db;
