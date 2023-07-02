import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDDB_W6g-uSRuJhnR1MDnhLhR5kOU1VpeA",
  authDomain: "aka-stores-b53da.firebaseapp.com",
  projectId: "aka-stores-b53da",
  databaseURL: "https://aka-stores-b53da-default-rtdb.firebaseio.com",
  storageBucket: "aka-stores-b53da.appspot.com",
  messagingSenderId: "308714417596",
  appId: "1:308714417596:web:ea7f353f2edf80087dcfb9",
  measurementId: "G-KRN99P169B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);