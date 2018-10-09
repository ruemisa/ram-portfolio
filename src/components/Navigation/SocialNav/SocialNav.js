import React from 'react';

// Components
import NavList from '../NavList/NavList';

// Styling
import styles from './SocialNav.module.css';

const socNav = ( props ) => {
    return (
        <nav className={ styles.SocNav }>
            <NavList navType="socNav" />
        </nav>
    );
}

export default socNav;