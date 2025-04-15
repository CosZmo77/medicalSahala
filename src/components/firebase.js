import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC22ewUwHkPTsN4gv3QHc_Y_DeuPiQaawA",
  authDomain: "medicalshala-new01.firebaseapp.com",
  projectId: "medicalshala-new01",
  storageBucket: "medicalshala-new01.firebasestorage.app",
  messagingSenderId: "711967624299",
  appId: "1:711967624299:web:cdbefea2231276a787b52e",
  measurementId: "G-Q4HKVMX7RQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize providers
export const googleAuthProvider = new GoogleAuthProvider();
// Configure Google provider (optional additional settings)
// googleAuthProvider.setCustomParameters({
//   prompt: 'select_account'
// });

export default app;
