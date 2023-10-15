import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQoJQ1Hhjl5i2RjMhRUBCu_-Z1xdp8vR8",
  authDomain: "intra-4415f.firebaseapp.com",
  projectId: "intra-4415f",
  storageBucket: "intra-4415f.appspot.com",
  messagingSenderId: "678680849705",
  appId: "1:678680849705:web:28050fe11e1e8618eb1b38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig,'app');

export const auth = getAuth(app);
