// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    authDomain:import.meta.env.VITE_apiKey, 
    projectId:import.meta.env.VITE_authDomain, 
    storageBucket:import.meta.env.VITE_projectId, 
    messagingSenderId:import.meta.env.VITE_storageBucket,
    appId:import.meta.env.VITE_messagingSenderId, 
    apiKey:import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;