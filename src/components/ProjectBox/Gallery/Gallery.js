import React from 'react';

// Coponents 
import Video from './Video/Video';

// Styling 
import styles from './Gallery.module.css';

const gallery = ( props ) => {
    return (
        <div className={ styles.Gallery }>
            <Video link={ props.video }/>
        </div>
    );
}

export default gallery;