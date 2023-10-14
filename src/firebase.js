// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZf_DcCf3D-RTQLIBpXKmnEZc-MZcjAGs",
  authDomain: "nodo-2d97a.firebaseapp.com",
  projectId: "nodo-2d97a",
  storageBucket: "nodo-2d97a.appspot.com",
  messagingSenderId: "138521855078",
  appId: "1:138521855078:web:4b2d31d5853ab503a799a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);