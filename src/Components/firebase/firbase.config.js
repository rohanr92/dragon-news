// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7LxyV_JSGcBk-ZCla7fQm2k4moU0M7UY",
  authDomain: "my-testing-project-7566c.firebaseapp.com",
  projectId: "my-testing-project-7566c",
  storageBucket: "my-testing-project-7566c.firebasestorage.app",
  messagingSenderId: "585977523825",
  appId: "1:585977523825:web:0c124aed6598d2224fb5d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app