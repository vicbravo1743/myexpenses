import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCjQlEUkvSUVHymIYnQtdh6BQjorxilnS4",
    authDomain: "mis-gastos-32554.firebaseapp.com",
    databaseURL: "https://mis-gastos-32554.firebaseio.com",
    projectId: "mis-gastos-32554",
    storageBucket: "mis-gastos-32554.appspot.com",
    messagingSenderId: "233065742171",
    appId: "1:233065742171:web:3ac28168fae4b6320aa47e",
    measurementId: "G-SX2SCPLVDW"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const auth = firebase.auth();

export {
  db,
  auth,
  firebase
}