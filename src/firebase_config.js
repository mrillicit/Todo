import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyBn7AFNstXrRujsAlCdGO2uchl1Cqp6m_k",
    authDomain: "todo-9b332.firebaseapp.com",
    projectId: "todo-9b332",
    storageBucket: "todo-9b332.appspot.com",
    messagingSenderId: "563237091620",
    appId: "1:563237091620:web:22b523c13eb09c035d1bb1"
  };
  firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();
  export { db };