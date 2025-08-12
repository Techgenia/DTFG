import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvggbyIAAIqQCgfePOa2Ov-uswWipBGRU",
  authDomain: "techgeniawebsite.firebaseapp.com",
  projectId: "techgeniawebsite",
  storageBucket: "techgeniawebsite.firebasestorage.app",
  messagingSenderId: "456213349455",
  appId: "1:456213349455:web:bd2e65df45363be553163a",
  measurementId: "G-V89E3M4B3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Analytics (optional, if you need it)
const analytics = getAnalytics(app);

export { db, analytics };