import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDk1llZ5LhhXdUztrTrPvO1o2hZQTqn9mo",
  authDomain: "chatbox-app-bf9f1.firebaseapp.com",
  databaseURL: "https://chatbox-app-bf9f1-default-rtdb.europe-west1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base