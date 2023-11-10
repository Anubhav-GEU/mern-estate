// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9cc92.firebaseapp.com",
  projectId: "mern-estate-9cc92",
  storageBucket: "mern-estate-9cc92.appspot.com",
  messagingSenderId: "1033742689197",
  appId: "1:1033742689197:web:84caeea73d196948757724"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);