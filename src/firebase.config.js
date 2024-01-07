// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRrXus3kHkbC0Yr86XlIMyNn0w4aiJ8kc",
  authDomain: "job-portal-3ad94.firebaseapp.com",
  projectId: "job-portal-3ad94",
  storageBucket: "job-portal-3ad94.appspot.com",
  messagingSenderId: "69872516229",
  appId: "1:69872516229:web:ff6760d8f8fe0cfe47bdec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};