import firebase from "firebase/app";
import "firebase/auth";
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBUyoLnPlaLcsUgc68D9hno4dWOJLIqdw",
  authDomain: "cookbook-b7fda.firebaseapp.com",
  projectId: "cookbook-b7fda",
  storageBucket: "cookbook-b7fda.appspot.com",
  messagingSenderId: "934563050144",
  appId: "1:934563050144:web:c8c252b01fd87272f9cfc5",
  measurementId: "G-22YTCKYTHS"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;