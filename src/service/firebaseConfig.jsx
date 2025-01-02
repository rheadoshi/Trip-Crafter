// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trip-crafter-v1.firebaseapp.com",
  projectId: "trip-crafter-v1",
  storageBucket: "trip-crafter-v1.firebasestorage.app",
  messagingSenderId: "357998249686",
  appId: "1:357998249686:web:ce3e6971dddb02bbeeeb77",
  measurementId: "G-PSHKRQDJFM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app)
//const analytics = getAnalytics(app);