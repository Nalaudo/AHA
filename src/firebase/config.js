import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNTYTGqx1og9QBJx-Xw4TKEGuNsHXLLvk",
  authDomain: "aha-base.firebaseapp.com",
  projectId: "aha-base",
  storageBucket: "aha-base.appspot.com",
  messagingSenderId: "572923511312",
  appId: "1:572923511312:web:8fcc3c4a19d0db7f990095"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
