// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOAcVxYWlMhVh8nT0eiNrjhwnWYlHsngA",
    authDomain: "ema-john-simple-9b9d4.firebaseapp.com",
    projectId: "ema-john-simple-9b9d4",
    storageBucket: "ema-john-simple-9b9d4.appspot.com",
    messagingSenderId: "801558475406",
    appId: "1:801558475406:web:3835f4d35b47169411cfdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;