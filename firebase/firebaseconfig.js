import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_te3W78cGUsA0ruknjwFFy_7EStAQzTI",
  authDomain: "aka-stores.firebaseapp.com",
  databaseURL: "https://aka-stores-default-rtdb.firebaseio.com",
  projectId: "aka-stores",
  storageBucket: "aka-stores.appspot.com",
  messagingSenderId: "153625423131",
  appId: "1:153625423131:web:f071bb272ce69eadcff7be",
  measurementId: "G-X608DLF4P9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);