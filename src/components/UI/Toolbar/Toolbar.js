import React from 'react';

import Navigation from '../Navigation/Navigation';
import styles from './Toolbar.module.css';

const toolbar = () => {
    return (
        <header className={ styles.Toolbar }>
            <div>
                <h1>RAM</h1>
            </div>
            <nav className={ styles.Nav }>
                <Navigation />
            </nav>
        </header>
    );
}

export default toolbar;