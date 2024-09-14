import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpeBuogwTcZPSz4UL0wOo0CIOUW3LUUFc",
  authDomain: "test-ad03e.firebaseapp.com",
  projectId: "test-ad03e",
  storageBucket: "test-ad03e.appspot.com",
  messagingSenderId: "447640512899",
  appId: "1:447640512899:web:2fde3f60c949bec00c2eb6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
