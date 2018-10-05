import React from 'react';

import styles from './VideoBox.module.css';

const videoBox = (props) => {
    return (
        <video className={ styles.Video } controls>
            <source src={ props.link } type="video/mp4" />
        </video>
    );
};

export default videoBox;