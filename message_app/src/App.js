import React, { useEffect, useState } from 'react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore';
import SignInButton from './components/TextBox/SignInButton';
import TextBox from './components/TextBox/TextBox';
import { db } from './firebase-config';


function App() {
  
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("timestamp", "asc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
      );

      return unsub;
  }, []);

    const addText = async () => {
      const collectionRef = collection(db, "messages");
      const payLoad = {text: textValue,
                       timestamp: serverTimestamp(),
                       photoURL: localStorage.getItem('profile_pic'),
                       uid: localStorage.getItem('uid')};
      await addDoc(collectionRef, payLoad)
  } 
  
  const [textValue, setTextValue] = useState('');
  const handleChange = event => {
    setTextValue(event.target.value);
  }
  console.log(messages);
  return (
    <div className="App">
      <SignInButton />
      
     
      {messages.map((message) => (
        <div key={message.id}>
          <TextBox text={message.text} time={message.timestamp} profileURL={localStorage.getItem('profile_pic')} />
        </div>
      ))}
     
     <input type='text' />

      

    </div>
  );
}

export default App;
