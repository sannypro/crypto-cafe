// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMjvuSrTDPh5T_lzKlMRvvhJr4OFut-s8",
    authDomain: "crypto-cafe-be0ed.firebaseapp.com",
    projectId: "crypto-cafe-be0ed",
    storageBucket: "crypto-cafe-be0ed.appspot.com",
    messagingSenderId: "992290151356",
    appId: "1:992290151356:web:c1ac1773dbc663bd0be9b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;