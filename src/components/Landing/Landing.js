import React from 'react';

// UI Elements
import Logo from '../UI/Logo/Logo';
import MouseIcon from '../UI/MouseIcon/MouseIcon';

// Navigation Components 
import SocialNav from '../Navigation/SocialNav/SocialNav';
import SideBar from '../Navigation/SideBar/SideBar';

// Styling
import styles from './Landing.module.css';

const landing = ( props ) => {
    return (
        <div className={ styles.Landing }>
            <div>
                <Logo />
            </div>
            <div>
                <SocialNav />
                <SideBar />
            </div>
            
            <MouseIcon />
        </div>
    );
}

export default landing;