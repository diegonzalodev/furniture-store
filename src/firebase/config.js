import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA7jvBnGAh3Sl2WtW8pUHk0jvG8o-_6iUY",
  authDomain: "furniture-store-a196b.firebaseapp.com",
  projectId: "furniture-store-a196b",
  storageBucket: "furniture-store-a196b.appspot.com",
  messagingSenderId: "939816296115",
  appId: "1:939816296115:web:c3d0673de19c79ffbcdac6",
};

const app = initializeApp(firebaseConfig);

export const initializeFireStore = () => {
  return app;
};
