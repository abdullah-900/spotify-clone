// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_API_KEY,
  authDomain: "spotify-clone-666e4.firebaseapp.com",
  projectId: "spotify-clone-666e4",
  storageBucket: "spotify-clone-666e4.appspot.com",
  messagingSenderId: "890949219396",
  appId: "1:890949219396:web:c630d002f7d18a12e33811",
  measurementId: "G-L4QB2Q38ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export default app