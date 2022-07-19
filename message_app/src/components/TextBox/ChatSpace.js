import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase-config';
import './ChatSpace.css';
import MessageBar from './MessageBar';
import Messages from './Messages';
import SignInButton from './SignInButton';


const ChatSpace = () => {

    const [isAuth, setIsAuth] = useState(false);

    onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(true);
      
    }

    else {
      setIsAuth(false);
    }
  })


    return (
        <div className="chat">
           
            <div className='header'>
                <h1>Messaging App</h1>
                <SignInButton />
            </div>
            
            <div className='messages'>
                <div>messages</div>
            </div>
            <div className='send_message_container'>

                {isAuth && 
                    <MessageBar /> 
                }
                

            </div>
        </div>

    )
}

export default ChatSpace;