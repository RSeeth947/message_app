import  React from 'react';

import './TextBox.css';

const TextBox = (props) => {
    

    return (
        
        <div className="text-box__container">
            <img src={props.profileURL} alt=''/>
            <div className="text-box__content">{props.value}</div>
            
        </div>
    )
};

export default TextBox;