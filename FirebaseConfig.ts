// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8XKs3vE1_fpaNp9BTvDtRxfF6-GzoqNg",
  authDomain: "fastbooking-da4d0.firebaseapp.com",
  projectId: "fastbooking-da4d0",
  storageBucket: "fastbooking-da4d0.appspot.com",
  messagingSenderId: "290626474196",
  appId: "1:290626474196:web:5f2d7c4a31b7fca9df6b41",
  measurementId: "G-J39YZJZLL5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
