// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOTTwgdqwySV7fQVz84XAEy-hV_24Hh4I",
  authDomain: "chatty-app-9cf19.firebaseapp.com",
  projectId: "chatty-app-9cf19",
  storageBucket: "chatty-app-9cf19.appspot.com",
  messagingSenderId: "1060823267922",
  appId: "1:1060823267922:web:19a9c01dfa1052e13dbd8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db= getFirestore()


export{auth, db}
