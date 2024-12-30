// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUmJj2FOOjMbCK7PfZ7R3ADDlB1BGTOmM",
  authDomain: "ecom-project-848c9.firebaseapp.com",
  projectId: "ecom-project-848c9",
  storageBucket: "ecom-project-848c9.firebasestorage.app",
  messagingSenderId: "626290961067",
  appId: "1:626290961067:web:ecc502009f6390e5e1e5ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;