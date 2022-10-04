import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2tL-B_eHEGqJTpuseu-7U0IuilqlxDak",
  authDomain: "ecommercereactapp-ederfornero.firebaseapp.com",
  projectId: "ecommercereactapp-ederfornero",
  storageBucket: "ecommercereactapp-ederfornero.appspot.com",
  messagingSenderId: "1080658635430",
  appId: "1:1080658635430:web:a0452e697846a639842267"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);