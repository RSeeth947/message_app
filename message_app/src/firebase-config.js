import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

const google_provider = new GoogleAuthProvider();


  
export const signInWithGoogle = () => {
  signInWithPopup(auth, google_provider).then((result) => {
    const name = result.user.displayName;
    const email = result.user.email;
    const profilePic = result.user.photoURL;
    const uid = result.user.uid;
    
    console.log(result);
    
    

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('profile_pic', profilePic);
    localStorage.setItem('uid', uid);

  }).catch((error) => {
    console.log(error);
  })

}


export const signOutWithGoogle = () => {
  signOut(auth);
  console.log("i signed out");
}


