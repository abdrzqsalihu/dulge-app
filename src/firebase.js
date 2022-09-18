// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAS4uyEa0d-LVDSCblu7E4BGkJN_tuE9Y",
  authDomain: "dulge-fbc58.firebaseapp.com",
  projectId: "dulge-fbc58",
  storageBucket: "dulge-fbc58.appspot.com",
  messagingSenderId: "299311719664",
  appId: "1:299311719664:web:d5e0f7fef2956cb5b08e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);