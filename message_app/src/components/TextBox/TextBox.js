import  React from 'react';

import './TextBox.css';

const TextBox = (props) => {
    

    return (
        
        <div className="text-box__container">
            <img src={props.profileURL} alt=''/>
            <div className="text-box__content">{props.text}</div>
            <div className="text-box__time">{props.time}</div>
        </div>
    )
};

export default TextBox;