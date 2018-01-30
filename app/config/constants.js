import firebase from 'firebase'

const config = {
  apiKey: '<api-key>',
  authDomain: '<auth-domain>',
  databaseURL: '<database-url>',
  projectId: '<project-id>',
  storageBucket: '<storage-bucket>',
  messagingSenderId: '<messaging-sender-id>',
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
