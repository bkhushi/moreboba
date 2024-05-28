// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  authDomain: "boba-21784.firebaseapp.com",
  projectId: "boba-21784",
  storageBucket: "boba-21784.appspot.com",
  messagingSenderId: "1072510488217",
  appId: "1:1072510488217:web:5547237609f92f0dc67208"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider