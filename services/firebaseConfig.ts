// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA94CcyP8WOkabVbtaqYAjVpvBAlHyoXyU",
  authDomain: "movieapp-6cf24.firebaseapp.com",
  projectId: "movieapp-6cf24",
  storageBucket: "movieapp-6cf24.firebasestorage.app",
  messagingSenderId: "159002069416",
  appId: "1:159002069416:web:381bff17cd9d136f61f59d",
  measurementId: "G-ZW136RF281"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage =getStorage(app);