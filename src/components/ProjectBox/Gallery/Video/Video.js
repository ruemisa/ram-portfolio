import React from 'react';

// Styling
import styles from './Video.module.css';

const video = ( props ) => {
    return (
        <video className={ styles.Selected } controls>
            <source src={ props.link } type="video/mp4" />
        </video>
    );
}

export default video;
