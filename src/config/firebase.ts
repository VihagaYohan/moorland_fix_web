import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfi_5-399VZFoiZurmDBRgckgbTxXftls",
  authDomain: "moorlandfix-dev.firebaseapp.com",
  projectId: "moorlandfix-dev",
  storageBucket: "moorlandfix-dev.firebasestorage.app",
  messagingSenderId: "341211390923",
  appId: "1:341211390923:web:1ba7bae49c4275351a0c4e",
  measurementId: "G-26B28P6FFX",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize cloud firestore and get a reference to the service
export const firebaseDB = getFirestore(app);
