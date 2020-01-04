import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBfSejEoHjR3ywb4omM0jxpVA5xqpjVkK0",
    authDomain: "se-crown.firebaseapp.com",
    databaseURL: "https://se-crown.firebaseio.com",
    projectId: "se-crown",
    storageBucket: "se-crown.appspot.com",
    messagingSenderId: "710512930297",
    appId: "1:710512930297:web:c76180bbc430c6955fe128",
    measurementId: "G-0H588Z6J8M"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
