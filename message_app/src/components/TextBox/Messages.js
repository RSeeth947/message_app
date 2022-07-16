import React, { useEffect, useState } from 'react'
import {  collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import TextBox from './TextBox'
import { db } from '../../firebase-config';



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
        <>
            {messages.map((message) => (
            <div key={message.id}>
                <TextBox value={message.text} profileURL={localStorage.getItem('profile_pic')} />
            </div>
        ))}
        </>
        
    )
};

export default Messages;