import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC5l5zb_1YNlestthZyEruY3fV3ReDgLIE",
  authDomain: "biblioteca-eletronica-365cd.firebaseapp.com",
  projectId: "biblioteca-eletronica-365cd",
  storageBucket: "biblioteca-eletronica-365cd.appspot.com",
  messagingSenderId: "829013586382",
  appId: "1:829013586382:web:5c32add8eac592e489bb9f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
