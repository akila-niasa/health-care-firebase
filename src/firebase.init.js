// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoI7VizJUCmOGOgSlOZSaMR4LRaGwC88I",
  authDomain: "ema-john-simple-module-49.firebaseapp.com",
  projectId: "ema-john-simple-module-49",
  storageBucket: "ema-john-simple-module-49.appspot.com",
  messagingSenderId: "588885033290",
  appId: "1:588885033290:web:55639f70f7c45b633841b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth