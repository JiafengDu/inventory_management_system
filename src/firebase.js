// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Sw0ie1O7W7AnDpDvB-Sj8_c7T7LQaFs",
  authDomain: "inventory-management-app-b5466.firebaseapp.com",
  projectId: "inventory-management-app-b5466",
  storageBucket: "inventory-management-app-b5466.appspot.com",
  messagingSenderId: "676143557603",
  appId: "1:676143557603:web:9ee1829dec1e53901a4ed6",
  measurementId: "G-PGD67EW1L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };