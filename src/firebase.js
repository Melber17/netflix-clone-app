import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAs7viHtpuhyJfi6f7bUEo9GUhizdJVSFI",
    authDomain: "netflix-dcdc7.firebaseapp.com",
    projectId: "netflix-dcdc7",
    storageBucket: "netflix-dcdc7.appspot.com",
    messagingSenderId: "659768029116",
    appId: "1:659768029116:web:f8c0f83325f9c034cb05b9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth}
export default db;