// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBHXmHspvFdjz_TCPS5rhMR6FoD1tgtj4",
  authDomain: "ejemplodb-99ac0.firebaseapp.com",
  databaseURL: "https://ejemplodb-99ac0-default-rtdb.firebaseio.com",
  projectId: "ejemplodb-99ac0",
  storageBucket: "ejemplodb-99ac0.firebasestorage.app",
  messagingSenderId: "471844715034",
  appId: "1:471844715034:web:f6527a991a6f1784d2afa3",
  measurementId: "G-T1GJB8SGBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app); // Para Firestore
// const db = getDatabase(app); // Para Realtime Database
// const auth = getAuth(app); // Para autenticación

export { db /*, auth */ }; // Exporta las instancias que necesites usar en script.js
