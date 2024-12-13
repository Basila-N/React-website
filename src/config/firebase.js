
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQcoSIb_9BWeWpiMgtUUSJ-I3n0uVaC-M",
  authDomain: "restaurant-login-d3116.firebaseapp.com",
  projectId: "restaurant-login-d3116",
  storageBucket: "restaurant-login-d3116.firebasestorage.app",
  messagingSenderId: "808864835211",
  appId: "1:808864835211:web:766a367c45a95616b7568e",
  measurementId: "G-RM8S4LMVFT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)