import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyCrkAGpD3b5FwD1PmI7XWzZGo0ar0_kpts",
    authDomain: "shopreact-8be76.firebaseapp.com",
    databaseURL: "https://shopreact-8be76.firebaseio.com",
    projectId: "shopreact-8be76",
    storageBucket: "shopreact-8be76.appspot.com",
    messagingSenderId: "525840145038",
    appId: "1:525840145038:web:115a32cb755454caa607df",
    measurementId: "G-BLFJFDWF8P"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle =  () => auth.signInWithPopup(provider)

export default firebase;