// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "merge-blog.firebaseapp.com",
  projectId: "merge-blog",
  storageBucket: "merge-blog.appspot.com",
  messagingSenderId: "867889092147",
  appId: "1:867889092147:web:4ad448a7e734de1aea7546"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);