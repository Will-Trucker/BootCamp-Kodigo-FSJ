// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2R39TeWiQAr-UbxHBnFhuXqa_WmvrOKs",
  authDomain: "auth-app-253bf.firebaseapp.com",
  projectId: "auth-app-253bf",
  storageBucket: "auth-app-253bf.appspot.com",
  messagingSenderId: "491637379232",
  appId: "1:491637379232:web:ceec82668eff57470279c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);