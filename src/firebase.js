import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBQlHa9QuFdNafap_1yIQl1CnXu5QQQ9Zs",
  authDomain: "chat-edc8d.firebaseapp.com",
  projectId: "chat-edc8d",
  storageBucket: "chat-edc8d.appspot.com",
  messagingSenderId: "440485460698",
  appId: "1:440485460698:web:79f9deea241ffb71d143e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();

 