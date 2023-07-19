import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";


import "firebase/firestore";



const firebaseConfig = {

  apiKey: "AIzaSyAstWSPHJ5dnH8q17kQQtxl7c4uTRObMb0",

  authDomain: "tasks-16385.firebaseapp.com",

  projectId: "tasks-16385",

  storageBucket: "tasks-16385.appspot.com",

  messagingSenderId: "888012300218",

  appId: "1:888012300218:web:4acdb09c733c01e52fc783",

  measurementId: "G-BBC1CGKP5H"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);




