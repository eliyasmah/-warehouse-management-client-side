// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU9DVnTe4EcNUk70D4VgbO-AokFwU3XPM",
  authDomain: "inventory-managing.firebaseapp.com",
  projectId: "inventory-managing",
  storageBucket: "inventory-managing.appspot.com",
  messagingSenderId: "528558971290",
  appId: "1:528558971290:web:b3f3187ffdb3f78fd0c223",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
