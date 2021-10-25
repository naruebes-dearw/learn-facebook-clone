import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWNJggtQy0keY8HPEhMOP0tezv193sRRY",
  authDomain: "facebook-clone-5dd19.firebaseapp.com",
  projectId: "facebook-clone-5dd19",
  storageBucket: "facebook-clone-5dd19.appspot.com",
  messagingSenderId: "102838881468",
  appId: "1:102838881468:web:eb3a1077835554b67b94b9",
  measurementId: "G-ELYS4W1LRG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;