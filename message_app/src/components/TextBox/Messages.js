import React, { useEffect, useState } from 'react'
import {  collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import TextBox from './TextBox'
import { db } from '../../firebase-config';
import './Messages.css'



const Messages = () => {
    
    const [messages, setMessages] = useState([]);
  
    useEffect(() => {
        const collectionRef = collection(db, "messages");
        const q = query(collectionRef, orderBy("timestamp", "asc"));

        const unsub = onSnapshot(q, (snapshot) =>
        setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
        );

        return unsub;
  }, []);

    return (
        <div className='message-container'>
            {messages.map((message) => (

            
            <div className={message.uid === localStorage.getItem('uid') ? 'right-message': 'left-message'}  key={message.id}>
                <TextBox className="textbox" value={message.text} profileURL={message.photoURL} name={message.name} position={message.uid === localStorage.getItem('uid') ? 'right-message': 'left-message'} />
            </div>
        ))}
        </div>
        
    )
};

export default Messages;