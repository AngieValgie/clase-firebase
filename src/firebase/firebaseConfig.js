import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH-HLU9V7WR6CpPV6hCnYorwTsrcoCeQ8",
  authDomain: "test-firebase-9e089.firebaseapp.com",
  projectId: "test-firebase-9e089",
  storageBucket: "test-firebase-9e089.appspot.com",
  messagingSenderId: "508182582913",
  appId: "1:508182582913:web:0b7e0bbb8d62c3d7121f80",
  measurementId: "G-1PG53QFNDM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
