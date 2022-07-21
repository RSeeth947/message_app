import  React from 'react';

import './TextBox.css';

const TextBox = (props) => {
    

    return (
        
        <div className='textbox'>
            <div className={props.position === "right-message" ? "right-textbox-name" : "left-textbox-name"}>{props.name}</div>
            <div className='photo-content-container'>
                <img className={props.position === "right-message" ? "right-textbox-photo" : "left-textbox-photo"} src={props.profileURL} alt=''/>
                <div className={props.position === "right-message" ? "right-container" : "left-container"}>
                    <div className={props.position === "right-message" ? "right-textbox-content" : "left-textbox-content"}>{props.value}</div>
                </div>
            </div>
            
        </div>
    )
};

export default TextBox;