import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDu6fkjre3KmIGrlVuZdcO-pue26ujZBq4",
    authDomain: "expensetracker-eff90.firebaseapp.com",
    projectId: "expensetracker-eff90",
    storageBucket: "expensetracker-eff90.appspot.com",
    messagingSenderId: "579513877296",
    appId: "1:579513877296:web:c897a1267b6c59cddffef5"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Firestore_Db = getFirestore(app);
export const Firebase_Auth = getAuth(app);