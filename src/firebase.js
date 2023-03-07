// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAfhZDpWc8u4QMJv1spsIavsL0Wpr7BdRA",
  authDomain: "eshop-9974f.firebaseapp.com",
  projectId: "eshop-9974f",
  storageBucket: "eshop-9974f.appspot.com",
  messagingSenderId: "717804571750",
  appId: "1:717804571750:web:924a1373685f7fbf04b1a7",
  measurementId: "G-L12RNTM8QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth()

export {app,auth};