import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase-config';

import './ChatBar.css';

const ChatBar = () => {
    
    const [inputText, setInputText] = useState('');
    

    const getChange = (event) => {
        setInputText(event.target.value);
    }

    const handleSubmit = async (event) => {
        setInputText(inputText)
        const collectionRef = collection(db, "messages");
        const payLoad = {text: inputText,
                       timestamp: serverTimestamp(),
                       photoURL: localStorage.getItem('profile_pic'),
                       uid: localStorage.getItem('uid')};
        
        event.preventDefault();

        setInputText('');
        await addDoc(collectionRef, payLoad)
}

    
    return (
        <div> 
            <input type='text' value={inputText} onChange={getChange}></input>
            <button onClick={handleSubmit}>Send</button>
        </div>
    )
};

export default ChatBar;