// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbWGx72mgUbAbAkuPmHB0cbDkaMmdWanU",
  authDomain: "th-assignment-e7f78.firebaseapp.com",
  projectId: "th-assignment-e7f78",
  storageBucket: "th-assignment-e7f78.appspot.com",
  messagingSenderId: "649577345993",
  appId: "1:649577345993:web:10f51862640d5e70fb6e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;