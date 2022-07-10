import  React from 'react';
import { useState } from 'react';
import { auth, signInWithGoogle, signOutWithGoogle } from '../../firebase-config'
import { onAuthStateChanged } from 'firebase/auth';


import './TextBox.css'

const SignInButton = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState("sign in");
  
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setIsUserSignedIn("sign out");
        
        }

        else {
        setIsUserSignedIn("sign in");
        
        }

    })

    return (
        
        <button onClick={isUserSignedIn === "sign in" ? signInWithGoogle : signOutWithGoogle}>{isUserSignedIn}</button>
    )
};

export default SignInButton;