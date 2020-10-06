import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqYYxULdFiRPQFirktDGM7GfjKhxA22sk",
  authDomain: "plantaloons-59eed.firebaseapp.com",
  databaseURL: "https://plantaloons-59eed.firebaseio.com",
  projectId: "plantaloons-59eed",
  storageBucket: "plantaloons-59eed.appspot.com",
  messagingSenderId: "520748303887",
  appId: "1:520748303887:web:4e3c7712d691121bf5457a",
  measurementId: "G-YJWVX70XB1",
};

firebase.initializeApp(firebaseConfig);
