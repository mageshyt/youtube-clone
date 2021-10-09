import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";
import { collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxMJJcxiwdJ1Cyh90BaVA9PuV7Hx1-PwM",
  authDomain: "clone-99df7.firebaseapp.com",
  projectId: "clone-99df7",
  storageBucket: "clone-99df7.appspot.com",
  messagingSenderId: "763615484952",
  appId: "1:763615484952:web:d799d35aa1d2d362e4776d",
  measurementId: "G-KWQRR6FEVQ",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase, collection };
