// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi1FUPcl4BtVDa5lKRByttpbzjK8NIyFE",
  authDomain: "a-little-pepper-fcef6.firebaseapp.com",
  projectId: "a-little-pepper-fcef6",
  storageBucket: "a-little-pepper-fcef6.appspot.com",
  messagingSenderId: "657098726732",
  appId: "1:657098726732:web:2b2c171d4e981709fd43e9",
  measurementId: "G-HWXW6VQ27B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
