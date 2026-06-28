// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC49u9l4eW7gIoAIgmy9ph_jC_EqvHUt4c",
    authDomain: "tech-blog-fa5ba.firebaseapp.com",
    projectId: "tech-blog-fa5ba",
    storageBucket: "tech-blog-fa5ba.firebasestorage.app",
    messagingSenderId: "159892056442",
    appId: "1:159892056442:web:5c40af0692770af3e34ec3",
    measurementId: "G-RWEYZWTSJ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);