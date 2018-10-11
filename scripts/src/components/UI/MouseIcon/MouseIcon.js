import React from 'react';

// Styling
import styles from './MouseIcon.module.css';

const mouseIcon = ( ) => {
    return (
        <div className={ styles.Scrolldowns }>
            <div className={ styles.Mouse }>
                <div className={ styles.Scrolling }></div>
            </div>
        </div>  
    );
}

export default mouseIcon;

