import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  databaseURL: process.env.DATABASEURL,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.MEASUREMENTID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default (context, inject) => {
  inject('firebase', firebase)
  inject('firestore', firebase.firestore())
  inject('auth', firebase.auth())
}
