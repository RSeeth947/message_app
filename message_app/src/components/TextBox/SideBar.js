import React from 'react';
import './SideBar.css'
import SignInButton from './SignInButton';

const SideBar = () => {

    return (
        <div className='sidebar'>
            <div className='sign-in-button'>
                <SignInButton />
            </div>
        </div> 


    )

}


export default SideBar;