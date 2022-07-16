import React from 'react'
import { useState } from 'react';
import SignInButton from './components/TextBox/SignInButton';
import ChatBar from './components/TextBox/ChatBar';
import Messages from './components/TextBox/Messages';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';



function App() {

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
    <div className="App">
      <SignInButton />
      <Messages />
      {isAuth && 
        <ChatBar /> 
      }

    </div>
  );
}

export default App;
