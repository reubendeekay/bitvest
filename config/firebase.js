// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnW5n3ppGMh3GvXmmxquGz4tHozEtPUMg",
  authDomain: "bitvest-9b9fe.firebaseapp.com",
  projectId: "bitvest-9b9fe",
  storageBucket: "bitvest-9b9fe.appspot.com",
  messagingSenderId: "113546745339",
  appId: "1:113546745339:web:031af41402552d2d97a75e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
