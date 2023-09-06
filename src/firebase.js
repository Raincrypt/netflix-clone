// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhFD4_L7jBxQh6Xwyu9yD8e_2dwIDvzbc",
  authDomain: "netflix-clone-3d1c4.firebaseapp.com",
  projectId: "netflix-clone-3d1c4",
  storageBucket: "netflix-clone-3d1c4.appspot.com",
  messagingSenderId: "107608495638",
  appId: "1:107608495638:web:84b75b3e5d084aba49c737",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
