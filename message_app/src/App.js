import React from 'react'
import { useState } from 'react';
import MessageBar from './components/TextBox/MessageBar';
import Messages from './components/TextBox/Messages';
import SideBar from './components/TextBox/SideBar';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';
import './App.css'




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
      <SideBar />
      <div className='content-chatbar'>
        <div className='content-wrap'>
          <div className='header'>
            <h1>Dark Theme Messaging</h1>
          </div>
          <div className='messages-container'>
            <Messages />
          </div>
        </div>

        <div className='send-message-container'>
        { isAuth &&
          <MessageBar />
        }
        </div>
      </div>  
      
    </div>
  );
}

export default App;
