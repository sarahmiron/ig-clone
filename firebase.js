import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAHy3sa0tzWkECUXmr5WvoRGmKahNErL08",
    authDomain: "rn-instagram-clone-936d3.firebaseapp.com",
    projectId: "rn-instagram-clone-936d3",
    storageBucket: "rn-instagram-clone-936d3.appspot.com",
    messagingSenderId: "210203710352",
    appId: "1:210203710352:web:c4ec41479869c8bb525915"
};

!firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore();

export { firebase, db };