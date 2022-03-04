
import {firebase} from "firebase/app";



const app = firebase.initializeApp({
  apiKey: "AIzaSyCyWdJiGZA1KS92n47i-x81zeThTQ8_tx8",
  authDomain: "nc-g63.firebaseapp.com",
  projectId: "nc-g63",
  storageBucket: "nc-g63.appspot.com",
  messagingSenderId: "585781689893",
  appId: "1:585781689893:web:4fdc97560d7b5fc2d509cc",
  measurementId: "G-WJSVK4T8DG"
});

export const getFirebase = () => {
    return app
}



