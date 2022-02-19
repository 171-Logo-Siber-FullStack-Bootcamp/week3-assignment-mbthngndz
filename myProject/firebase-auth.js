// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH1hldtLs6EMKD92uak5Cg6SOKK7OtL_4",
  authDomain: "react-native-93d51.firebaseapp.com",
  projectId: "react-native-93d51",
  storageBucket: "react-native-93d51.appspot.com",
  messagingSenderId: "550178799848",
  appId: "1:550178799848:web:3baec2c35a69e99313895d",
  measurementId: "G-MT754TJYRK"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const fireStore = firebase.firestore();
const auth = firebase.auth();
const background = firebase.functions();

export { fireStore, auth };