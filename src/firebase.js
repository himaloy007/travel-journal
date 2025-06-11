// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQi5sM26PDgY4ChSblqC53Z4JoDUc5sS4",
  authDomain: "travel-journal-c8d20.firebaseapp.com",
  projectId: "travel-journal-c8d20",
  storageBucket: "travel-journal-c8d20.firebasestorage.app",
  messagingSenderId: "798845148228",
  appId: "1:798845148228:web:06fd76266563d4ee4f3011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
export const db = getDatabase(app);