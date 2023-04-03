// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOzomwRyucvy5WRVIHJXuCbDBSjpuOP9I",
  authDomain: "tiktok---jornado.firebaseapp.com",
  projectId: "tiktok---jornado",
  storageBucket: "tiktok---jornado.appspot.com",
  messagingSenderId: "360060936723",
  appId: "1:360060936723:web:b139b99015f6714a2895e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;