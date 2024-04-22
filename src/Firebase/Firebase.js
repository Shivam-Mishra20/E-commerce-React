 //use firbase for authentication
import { initializeApp } from "firebase/app";
//email auth
import { getAuth } from "firebase/auth";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyBvSqUu1xCNlfE8q4eqt0N79xNg6vKixq4",
  authDomain: "mitraecom-abf77.firebaseapp.com",
  projectId: "mitraecom-abf77",
  storageBucket: "mitraecom-abf77.appspot.com",
  messagingSenderId: "10660775653",
  appId: "1:10660775653:web:90b2c9b9487fec9196f60c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth()
 
export {app ,auth}