import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';

import './MessageBar.css';



const MessageBar = () => {
    
    const [inputText, setInputText] = useState('');
    
    const getChange = (event) => {
        setInputText(event.target.value);
    }
    const user = auth.currentUser;

    const displayName = user.displayName;
    const photoURL = user.photoURL;

    const handleSubmit = async (event) => {
        setInputText(inputText)
        const collectionRef = collection(db, "messages");
        const payLoad = {text: inputText,
                       timestamp: serverTimestamp(),
                       photoURL: photoURL,
                       uid: localStorage.getItem('uid'),
                       name: displayName};
        
        event.preventDefault();

        setInputText('');
        await addDoc(collectionRef, payLoad)
}

    

    return (
        <div className='input-container'> 
            <div className='input-field-wrapper'>
                <input className='input-field' type='text' value={inputText} onChange={getChange} placeholder="What's Poppin..."></input>
            </div>
            <div className='input-button-wrapper'>
                <button className='input-button' onClick={handleSubmit}>Send</button>
            </div>
        </div>
    )
};

export default MessageBar;