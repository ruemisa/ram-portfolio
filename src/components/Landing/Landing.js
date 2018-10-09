import React from 'react';

// UI Elements
import Logo from '../UI/Logo/Logo';
import MouseIcon from '../UI/MouseIcon/MouseIcon';

// Navigation Components 
import SocialNav from '../Navigation/SocialNav/SocialNav';
import SideBar from '../Navigation/SideBar/SideBar';

const landing = ( props ) => {
    return (
        <div>
            <Logo />
            <SocialNav />
            <SideBar />

            <MouseIcon />
        </div>
    );
}

export default landing;