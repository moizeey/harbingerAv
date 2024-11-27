import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMp6YQcXnjJa9KJx2tFt8Z6KglSp0uvgc",
  authDomain: "harbingerav.firebaseapp.com",
  projectId: "harbingerav",
  storageBucket: "harbingerav.firebasestorage.app",
  messagingSenderId: "129182381297",
  appId: "1:129182381297:web:373edb801119546945a550",
  measurementId: "G-YE1G8JZVZE",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
