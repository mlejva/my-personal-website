import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signIn = async (email: string, password: string) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    return { status: 'AUTH_SUCCESS' };
  } catch (error) {
    return { status: 'AUTH_ERROR', error: error.message };
  }
};

const signUp = async (email: string, password: string) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    return { status: 'AUTH_SUCCESS' };
  } catch (error) {
    return { status: 'AUTH_ERROR', error: error.message };
  }
};

const signOut = async () => {
  try {
    await auth.signOut();
    return { status: 'AUTH_SUCCESS' };
  } catch (error) {
    return { status: 'AUTH_ERROR', error: error.message };
  }
};

export { auth, signIn, signUp, signOut };