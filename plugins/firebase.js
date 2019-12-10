import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: '<replace_here>',
    authDomain: '<replace_here>',
    databaseURL: '<replace_here>',
    projectId: '<replace_here>',
    storageBucket: '<replace_here>',
    messagingSenderId: '1<replace_here>',
    appId: '<replace_here>',
    measurementId: '<replace_here>'
  }
  firebase.initializeApp(config)
  const settings = { timestampsInSnapshots: true }
  firebase.firestore().settings(settings)
}
const fireDb = firebase.firestore()
export { fireDb }
