import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC_te3W78cGUsA0ruknjwFFy_7EStAQzTI",
    authDomain: "aka-stores.firebaseapp.com",
    projectId: "aka-stores",
    storageBucket: "aka-stores.appspot.com",
    messagingSenderId: "153625423131",
    appId: "1:153625423131:web:f071bb272ce69eadcff7be",
    measurementId: "G-X608DLF4P9"
  };



  const app = initializeApp(firebaseConfig);
  if(!app.apps){
    if(typeof window !== "undefined"){
        if("measurementId" in firebaseConfig){
            const analytics = getAnalytics(app);
        }
  }

  }

