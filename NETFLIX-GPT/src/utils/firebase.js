/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY9d65pSB_qIXOvn3ScldoQw7U4BEA7pc",
  authDomain: "kapilsarkarmovieflex-1c95d.firebaseapp.com",
  projectId: "kapilsarkarmovieflex-1c95d",
  storageBucket: "kapilsarkarmovieflex-1c95d.firebasestorage.app",
  messagingSenderId: "120794648665",
  appId: "1:120794648665:web:0372d8bc9416d188af2148",
  measurementId: "G-QD9MSB53BF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()