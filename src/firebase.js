import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyD1MrNVFRLj8ubfct1N84braolMK6zcmUs",
    authDomain: "slack-cl-6eac0.firebaseapp.com",
    projectId: "slack-cl-6eac0",
    storageBucket: "slack-cl-6eac0.appspot.com",
    messagingSenderId: "214049339347",
    appId: "1:214049339347:web:0cb18db5b1194d7a6c6126"
  };
  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }