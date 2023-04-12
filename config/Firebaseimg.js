// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl6l7bwfR2TooYL9gkbuKqXOLxpMIAVJo",
  authDomain: "tuabc-38208.firebaseapp.com",
  projectId: "tuabc-38208",
  storageBucket: "tuabc-38208.appspot.com",
  messagingSenderId: "795631925043",
  appId: "1:795631925043:web:f0c7760ed1a286ef25f046",
  measurementId: "G-ZNFKL522LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);