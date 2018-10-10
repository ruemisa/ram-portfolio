import React from 'react';

// Styling
import styles from './Details.module.css';

const details = ( props ) => {
    
    return (
        <div className={ styles.Details }>
            <h2 className={ styles.ProjectName }>Project Name</h2>
            <p className={ styles.Technologies }>HTML + JS + CSS</p>
            <p className={ styles.Description }>A Full-Stack web application for a blog forum</p>
            <div className={ styles.ProjectLinks }>
                <a href="#">Links</a>
            </div>
        </div>
    );
}

export default details;