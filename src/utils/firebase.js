// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflix-gpt-4e112.firebaseapp.com",
  projectId: "netflix-gpt-4e112",
  storageBucket: "netflix-gpt-4e112.appspot.com",
  messagingSenderId: "741408290007",
  appId: "1:741408290007:web:67c1aeb622333e8f12ac92",
  measurementId: "G-9BGN0Q9C12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initializing Auth
export const auth = getAuth();
