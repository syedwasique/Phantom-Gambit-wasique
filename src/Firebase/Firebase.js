// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,setPersistence, browserSessionPersistence} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1fRMOwYNUf_K0E9YozwSt1_xRb573tHA",
  authDomain: "phantom-gambit.firebaseapp.com",
  projectId: "phantom-gambit",
  storageBucket: "phantom-gambit.firebasestorage.app",
  messagingSenderId: "741534039991",
  appId: "1:741534039991:web:27b86cc65487687dca3232",
  measurementId: "G-DYNWYG520L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

setPersistence(auth, browserSessionPersistence)
  .catch((error) => {
    console.error("Error setting auth persistence:", error);
  });


export {app,auth,db} 
 export const googleProvider = new GoogleAuthProvider();