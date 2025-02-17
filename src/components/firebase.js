


import {getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBmNQ8goJFk1EdxgifBzbcDPhFuZZyn1s",
  authDomain: "login-auth-7f973.firebaseapp.com",
  projectId: "login-auth-7f973",
  storageBucket: "login-auth-7f973.firebasestorage.app",
  messagingSenderId: "146619101663",
  appId: "1:146619101663:web:98169051deceaf1168546a",
  measurementId: "G-YV4020YGGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;