import firebase from 'firebase';
import "firebase/firestore";


// Initialize Firebase
const config = {
  apiKey: "AIzaSyBiRnYQX_1upYOMLzkT4yBmpobc0RjSHJw",
  authDomain: "nodal-e60d0.firebaseapp.com",
  databaseURL: "https://nodal-e60d0.firebaseio.com",
  projectId: "nodal-e60d0",
  storageBucket: "nodal-e60d0.appspot.com",
  messagingSenderId: "148407972647"
};

const firebaseApp = firebase.initializeApp(config);
const firebaseAuth = firebase.auth();
// Initialize Cloud Firestore through Firebase
const firebaseDB = firebase.firestore();


export { firebaseApp, firebaseAuth, firebaseDB };

