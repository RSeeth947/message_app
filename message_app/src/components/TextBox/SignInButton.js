import  React from 'react';
import './SignInButton.css'
import { useState } from 'react';
import { auth, signInWithGoogle, signOutWithGoogle } from '../../firebase-config'
import { onAuthStateChanged } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc'


import './TextBox.css'



const SignInButton = () => {
    const [isUserSignedIn, setIsUserSignedIn] = useState("");
  
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsUserSignedIn("sign out");
        
        }

        else {
            setIsUserSignedIn("Google");
        
        }

    })


    return (

            
        <button type='button' className="google_button" onClick={isUserSignedIn === "Google" ? signInWithGoogle : signOutWithGoogle}>
            <div id='button_content'>
                <div id='icon'>
                    {isUserSignedIn === "Google" &&
                    <FcGoogle />
                    }
                </div>
                <div id='btn_text'>
                    {isUserSignedIn}
                </div>
            </div>
                  
        
        </button>
   
        
         
    )
};


export default SignInButton;

