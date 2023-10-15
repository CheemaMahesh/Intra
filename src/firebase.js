import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDQoJQ1Hhjl5i2RjMhRUBCu_-Z1xdp8vR8",
  authDomain: "intra-4415f.firebaseapp.com",
  projectId: "intra-4415f",
  storageBucket: "intra-4415f.appspot.com",
  messagingSenderId: "678680849705",
  appId: "1:678680849705:web:28050fe11e1e8618eb1b38"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyCTrZmii7IObwZxWbmCI9TfRwdauN4SmaQ",
 authDomain: "blogging-app-e3676.firebaseapp.com",
 projectId: "blogging-app-e3676",
 storageBucket: "blogging-app-e3676.appspot.com",
 messagingSenderId: "1087811735223",
 appId: "1:1087811735223:web:9c3f1072d7b0f68cd18732"
};
// ================================================================================
const firebaseConfig3 = {
  apiKey: "AIzaSyC7xB4sCjOdNCQsF-Qu3XntJ1wNf97-qb0",
  authDomain: "orderids-ee26b.firebaseapp.com",
  projectId: "orderids-ee26b",
  storageBucket: "orderids-ee26b.appspot.com",
  messagingSenderId: "25546707482",
  appId: "1:25546707482:web:83fe6697a8fa5be98177a3"
};


const firebaseConfig4 = {
  apiKey: "AIzaSyChVRS0HAy_5xpo-n-tlbHr4Xpdy7k-Tjo",
  authDomain: "orders-6ca62.firebaseapp.com",
  projectId: "orders-6ca62",
  storageBucket: "orders-6ca62.appspot.com",
  messagingSenderId: "165648193461",
  appId: "1:165648193461:web:75ae03d5e040b3c63f2bfc"
};





// Initialize 3rd Firebase app with a unique name
const app3 = initializeApp(firebaseConfig3, "app3");

const app4=initializeApp(firebaseConfig4, "app4");



// Initialize Firestore and get a reference to the service for app3



// ==========================================================================

// Initialize Firebase
const app = initializeApp(firebaseConfig,'app');
const app2=initializeApp(firebaseConfig2,"app2");

export const auth1 = getAuth(app);
export const db2=getFirestore(app2);

export const db3 = getFirestore(app3);
export const db4=getFirestore(app4);