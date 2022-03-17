import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBt9pMmaiU3Zn1ddmLBZgl6hjARAF1YRKA",
    authDomain: "recipe-app-81cfe.firebaseapp.com",
    projectId: "recipe-app-81cfe",
    storageBucket: "recipe-app-81cfe.appspot.com",
    messagingSenderId: "654894560937",
    appId: "1:654894560937:web:bba8f27da691d4223c9bb8",
    measurementId: "G-XP3WEYX08H"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);