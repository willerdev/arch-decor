import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPXtL_NSqdkwjAWFB26MF4bI5Cru9ypLg",
    authDomain: "hobedata.firebaseapp.com",
    projectId: "hobedata",
    storageBucket: "hobedata.appspot.com",
    messagingSenderId: "932816369920",
    appId: "1:932816369920:web:cac95355e18a8707e85be5",
    measurementId: "G-ZK86GMS8MS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
