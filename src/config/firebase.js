// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCptNPfQjHq3bDyyem0AQpNItXUdtOJFaQ",
  authDomain: "xxss-16a3b.firebaseapp.com",
  projectId: "xxss-16a3b",
  storageBucket: "xxss-16a3b.appspot.com",
  messagingSenderId: "33483180705",
  appId: "1:33483180705:web:0b6e4917238623ae83bee0",
  measurementId: "G-DG0NREKXR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
