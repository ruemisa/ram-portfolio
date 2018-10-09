import React from 'react';

// Components 
import NavList from '../NavList/NavList';

// Styling
import styles from './SideBar.module.css';

const sideBar = ( props ) => {
    return (
        <nav className={ styles.SideBar }>
            <NavList navType="sideBar" />
        </nav>
    );
}

export default sideBar;