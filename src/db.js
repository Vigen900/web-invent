import firebase from 'firebase';
 
const firebaseConfig = {
    apiKey: "AIzaSyATyC_muDvNH3PkLocUawijl8CbkHCAJlY",
    authDomain: "invenyou-16594.firebaseapp.com",
    projectId: "invenyou-16594",
    storageBucket: "invenyou-16594.appspot.com",
    messagingSenderId: "14542731666",
    appId: "1:14542731666:web:688d07152a4e5efce6694b"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
 
export default db;