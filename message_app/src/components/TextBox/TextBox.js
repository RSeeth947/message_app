import  React from 'react';

import './TextBox.css';

const TextBox = (props) => {
    

    return (
        
        <div className="textbox_container">
            <img src={props.profileURL} alt=''/>
            <div className="textbox_content">{props.value}</div>
            
        </div>
    )
};

export default TextBox;