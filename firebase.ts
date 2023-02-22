import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_2KJvx4d1_5PmnkZL7SMkLH8dedqoPEE",
  authDomain: "chatgptmessenger-417b9.firebaseapp.com",
  projectId: "chatgptmessenger-417b9",
  storageBucket: "chatgptmessenger-417b9.appspot.com",
  messagingSenderId: "363430681714",
  appId: "1:363430681714:web:0155b3b58dea7e7064b6eb",
  measurementId: "G-BFKDP2C5GF",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
