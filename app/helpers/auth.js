import { firebaseAuth } from 'config/constants'

// Firebase authentication related

export const checkIfAuthed = (store) => store.getState().users.isAuthed // ignore firebase.

export const logout = () => firebaseAuth().signOut()

export const login = (email, pw) => firebaseAuth().signInWithEmailAndPassword(email, pw)

export const resetPassword = (email) => firebaseAuth().sendPasswordResetEmail(email)
