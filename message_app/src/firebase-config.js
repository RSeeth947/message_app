import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAFvuFUAxrKdL_JYpRp5GPF-0zevRrpP-4",
  authDomain: "message-app-2a351.firebaseapp.com",
  projectId: "message-app-2a351",
  storageBucket: "message-app-2a351.appspot.com",
  messagingSenderId: "756575664479",
  appId: "1:756575664479:web:2fd430d8edca6e64651eea",
  measurementId: "G-SFCHQ45X2C"
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
