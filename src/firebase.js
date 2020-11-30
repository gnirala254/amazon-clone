import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXWJVvWemURdyqnKSdQy0toIvLVCvrrJ0",
  authDomain: "clone-9bef9.firebaseapp.com",
  databaseURL: "https://clone-9bef9.firebaseio.com",
  projectId: "clone-9bef9",
  storageBucket: "clone-9bef9.appspot.com",
  messagingSenderId: "569829812928",
  appId: "1:569829812928:web:beb4ea70cddcf7acdf5b25",
  measurementId: "G-2BBZDWWS2F",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
