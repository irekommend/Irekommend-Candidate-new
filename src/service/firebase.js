import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCT-hLjhxJJK0Dpiq42kLQ5_4OuwlLLTg",
    authDomain: "irekommend-978cb.firebaseapp.com",
    projectId: "irekommend-978cb",
    storageBucket: "irekommend-978cb.appspot.com",
    messagingSenderId: "618335735649",
    appId: "1:618335735649:web:d79cfc681ffd8bccf0bf20",
    measurementId: "G-DBGH9GGZNG"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();


// export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;