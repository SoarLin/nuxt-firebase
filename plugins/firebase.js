import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "my-firebase-test-project-a13fb.firebaseapp.com",
  databaseURL: "https://my-firebase-test-project-a13fb.firebaseio.com",
  projectId: "my-firebase-test-project-a13fb",
  storageBucket: "my-firebase-test-project-a13fb.appspot.com",
  messagingSenderId: "1085532144000",
  appId: "1:1085532144000:web:b5d656902d75b903940165",
  measurementId: "G-PG2VXNZL3R"
}
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const fireDb = firebase.firestore()
export { fireDb }
